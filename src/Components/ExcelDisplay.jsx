import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import * as XLSX from 'xlsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExcelDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);

  const client = createClient({
    space: 'p2utm544n4sq',
    accessToken: 'cQTkJfWn15RinC2scjPL89MreIbwQY31ODrPqDlc3RM',
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'article',
          select: 'fields.articleFile',
        });

        if (response.items.length > 0) {
          const fileUrl = response.items[0].fields.articleFile.fields.file.url;
          const fileResponse = await fetch(fileUrl);

          if (!fileResponse.ok) {
            throw new Error('File not found');
          }
          const arrayBuffer = await fileResponse.arrayBuffer();
          const workbook = XLSX.read(arrayBuffer, { type: 'array' });
          const sheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[sheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);

          const filteredData = jsonData.filter(item =>
            Object.values(item).some(value => value !== null && value !== '')
          );

          setArticles(filteredData);
          if (filteredData.length > 0) {
            setHeaders(Object.keys(filteredData[0]));
          }
        }
      } catch (error) {
        console.error('Error fetching the Excel file:', error);
      }
    };

    fetchArticles();
  }, [client]);

  const handleSearchInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      const filtered = articles.filter(article =>
        Object.values(article).some(cell =>
          typeof cell === 'string' && cell.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

      setFilteredArticles(filtered);
      setLoading(false);
    }, 500);
  };

  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  const shortenUrl = (url) => {
    try {
      const { hostname, pathname } = new URL(url);
      const shortPath = pathname.length > 30 ? `${pathname.slice(0, 30)}...` : pathname;
      return `${hostname}${shortPath}`;
    } catch (error) {
      return url;
    }
  };

  const displayData = searchTerm ? filteredArticles : articles;

  return (
    <div className="container my-5">
      {/* <h2 className="text-center mb-4">Imported Articles</h2> */}
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={handleSearchInput}
          className="form-control"
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading && <div className="text-center">Loading...</div>}
      {!loading && displayData.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered w-100" style={{ tableLayout: 'fixed' }}>
            <thead className="thead-light">
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {displayData.map((item, index) => (
                <tr key={index}>
                  {headers.map((header) => {
                    const cellData = item[header];
                    if (header === 'articleFile' && cellData) {
                      return (
                        <td key={header}>
                          {cellData.fields.file.url ? (
                            <a href={cellData.fields.file.url} target="_blank" rel="noopener noreferrer">
                              View File
                            </a>
                          ) : (
                            'No file available'
                          )}
                        </td>
                      );
                    }

                    if (typeof cellData === 'string' && isValidUrl(cellData)) {
                      return (
                        <td key={header}>
                          <a 
                            href={cellData} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-primary" 
                            title={cellData} 
                          >
                            {shortenUrl(cellData)}
                          </a>
                        </td>
                      );
                    }
                    return (
                      <td key={header}>
                        {cellData ? cellData.toString() : ''}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : !loading && displayData.length === 0 ? (
        <p className="text-center">No matching articles found.</p>
      ) : null}
    </div>
  );
};

export default ExcelDisplay;
