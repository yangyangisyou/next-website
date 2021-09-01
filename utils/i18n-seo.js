import { App } from '../pages';

export default App;

const pagePropData = [
  {
    locale: 'en',
    meta: {
      title: 'Cars and Dealers',
      description: 'This website is to sell.'
    }
  },
  {
    locale: 'de',
    meta: {
      title: 'Autos und Händler',
      description: 'Diese Website ist zum Verkauf bestimmt.'
    }
  }
]

const getPathSlugs = () => {
  // We fetched locales from our API once at build time
  return pagePropData.map(({locale, meta: {title, description}}) => ({
    params: {
      locale,
      title,
      description
    },
  }));
}
  

export async function getStaticPaths(...args) {
  const pathsWithProps = getPathSlugs();
  return {
    paths: pathsWithProps,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params
    }
  };
}