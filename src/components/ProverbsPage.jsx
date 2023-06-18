import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTranslatorForLanguage } from '../translations';

const ProverbsPage = () => {
  const [proverbs, setProverbs] = useState([]);
  // TODO: add something coming from the context here

  useEffect(() => {
    console.log(`fetching "${currentLanguage}" proverbs`);
    fetch(`fake-api/${currentLanguage}.json`)
      .then((res) => res.json())
      .then((data) => setProverbs(data.results));
  }, []);

  // TODO: change that to take the current language from Context instead of hardcoding "en"
  const t = getTranslatorForLanguage('en');

  return (
    <>
      <Link to="/settings">{t('settings')}</Link>
      <h1>{t('proverbs')}</h1>
      <ul>
        {proverbs.map((res) => (
          <li key={res}>{res}</li>
        ))}
      </ul>
    </>
  );
};

export default ProverbsPage;
