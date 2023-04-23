import './AboutSearch.scss';

const searchFeatures = [
  {
    index: '1',
    title: ['E', 'n', 'c', 'y', 'c', 'l', 'o', 'p', 'e', 'd', 'i', 'c'],
    description: 'With our search engine, you can search across multiple blockchains and quickly find the data you are looking for. From Bitcoin to Ethereum and beyond, we have got you covered.'
  },
  {
    index: '2',
    title: ['P', 'o', 'w', 'e', 'r', 'f', 'u', 'l'],
    description: 'Displays blockchain data in a clear and intuitive way, making it easy to understand and interact with. You can view transactions, balances, and more, all in one place.'
  },
  {
    index: '3',
    title: ['A', 'd', 'v', 'a', 'n', 'c', 'e', 'd'],
    description: 'Search across multiple blockchains and quickly find the data you are looking for. From Bitcoin to Ethereum and beyond, we have got you covered.'
  },
  {
    index: '4',
    title: ['E', 'a', 's', 'y'],
    description: 'Interact with blockchain data in a variety of ways. Whether you want to send a transaction, check a balance, or explore a smart contract.'
  }
];

export const AboutSearch = () => {
  return (
    <div className="about-search">
      <h2 className="search-title">Search Multiple Chains</h2>

      <div className="search-example">
        <div className="search-example-title">
          You can search fast through multiple chains using our powerful search engine.
        </div>
      </div>

      <p className="search-text">
        Introducing our unique search engine, the only tool you need to find, display, and interact with multiple blockchains! With our search engine, you can easily search for and access data from a wide range of blockchains, all in one place. Explore new and existing <span>pools</span>, <span>assets</span>, <span>companies</span> and more...<br />
        <br></br>
        <span className="span-green">Whether you're a blockchain enthusiast, a developer, or just curious about the technology, our search engine is the perfect tool to help you discover and explore everything that the blockchain world has to offer.</span>
      </p>

      <div className="search-features">
        {
          searchFeatures.map((feature) => (
            <div className="feature">
              <div className="feature-text">
                <div className="feature-icon">{feature.index}</div>
                <div className="feature-title">
                  {
                    feature.title.map((title) => (
                      <span>{title}</span>
                    ))
                  }
                </div>
              </div>

              <div className="feature-description">{feature.description}</div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
