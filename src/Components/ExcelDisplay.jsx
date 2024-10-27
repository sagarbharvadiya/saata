import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import * as XLSX from 'xlsx';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExcelDisplay = () => {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState(null); // New state for additional info
  const client = createClient({
    space: 'p2utm544n4sq',
    accessToken: 'cQTkJfWn15RinC2scjPL89MreIbwQY31ODrPqDlc3RM',
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'article',
          select: 'fields.articleFile,fields.description,fields.linkWithDis',
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
          setAdditionalInfo(response.items[0].fields.linkWithDis); // Set additional info
          setArticles(filteredData);
          if (filteredData.length > 0) {
            setHeaders(Object.keys(filteredData[0]));
          }

          setDescription(response.items[0].fields.description);
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

  const filterArticles = () => {
    const filtered = articles.filter(article =>
      Object.values(article).some(cell =>
        typeof cell === 'string' && cell.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredArticles(filtered);
  };

  useEffect(() => {
    if (searchTerm) {
      filterArticles();
    }
  }, [searchTerm]);

  const handleSearch = () => {
    setLoading(true);
    setSearchTriggered(true);
    setTimeout(() => {
      filterArticles();
      setLoading(false);
      setSearchTriggered(false);
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

  const displayData = searchTerm ? filteredArticles : [];

  const options = {
    renderNode: {
      'embedded-asset-block': (node) => null,
      'hyperlink': (node) => {
        const { uri } = node.data;
        return (
          <a href={uri} target="_blank" rel="noopener noreferrer" className="text-primary">
            {node.content[0].value}
          </a>
        );
      },
      'asset-hyperlink': (node) => {
        const assetTitle = 'SAJTA Volume 8, Number 1: July, 2022';
        const assetUrl = node.data.target.fields.file.url;

        return (
          <a href={assetUrl} target="_blank" rel="noopener noreferrer" className="text-primary">
            {assetTitle}
          </a>
        );
      }
    }
  };

  return (
    <div className="container excel-display my-5">
      <div className="about_us_wrapper">
        <h2>SAJTA – South Asian Journal of Transactional Analysis</h2>
      </div>
      <div className="about_us_content">
      <div className="about_us_content">
        {additionalInfo && documentToReactComponents(additionalInfo, options)} {/* New rendering */}
        <br />
    
      </div>
          {/* <p>The SAJTA journal (formerly known as “SAATA Journal) is a peer-reviewed e-journal focusing on Transactional Analysis &nbsp;theory, principles and application in the four fields of psychotherapy, counselling, education and organizational development. The intention is to invite Transactional Analysis trainers and trainees to articulate their learnings, applications and innovations in Transactional Analysis theory and practice in our region. This e-journal is published starting August 2015.</p> */}
      </div>

      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Search by author, keywords, field of specialisation, context etc"
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
        <div className="row">
          {displayData.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  {headers.map((header) => {
                    const cellData = item[header];

                    if (header === 'articleFile' && cellData && cellData.fields && cellData.fields.file && cellData.fields.file.url) {
                      return (
                        <div key={header} className="mb-2">
                          <strong>Access these Articles Here: </strong>
                          <a href={cellData.fields.file.url} target="_blank" rel="noopener noreferrer">
                            View File
                          </a>
                        </div>
                      );
                    }

                    if (typeof cellData === 'string' && isValidUrl(cellData)) {
                      return (
                        <div key={header} className="mb-2">
                          <a
                            href={cellData}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary"
                            title={cellData}
                          >
                            {shortenUrl(cellData)}
                          </a>
                        </div>
                      );
                    }

                    return (
                      <div key={header} className="mb-2">
                        {cellData ? (
                          <>
                            <strong>{header}: </strong>
                            {cellData.toString()}
                          </>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) :!loading && searchTerm && displayData.length === 0 && (
  <p className="text-center">No matching articles found.</p>
)}
<br />
      <div className="about_us_content">
        {description && documentToReactComponents(description, options)}
      </div>
    </div>
  );
};

export default ExcelDisplay;
