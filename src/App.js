import React, { useState } from 'react';
import './App.css';

// Importing local images for product buttons and main content
import product1 from './assets/product1.jpg';
import product2 from './assets/product2.jpg';
import product3 from './assets/product3.jpg';
import product4 from './assets/product4.jpeg';
import product5 from './assets/product5.jpg';
import product6 from './assets/product6.jpg';
import product7 from './assets/product7.jpg';
import product8 from './assets/product8.jpeg';
import product9 from './assets/product9.jpg';
import product10 from './assets/product10.jpg';
import product11 from './assets/product11.jpeg';
import product12 from './assets/product12.jpg';
import product13 from './assets/product13.jpg';
import product1Main from './assets/product1Main.jpeg';
import product2Main from './assets/product2Main.jpg';
import product3Main from './assets/product3Main.jpg';
import product4Main from './assets/product4Main.jpg';
import product5Main from './assets/product5Main.jpg';
import product6Main from './assets/product6Main.jpg';
import product7Main from './assets/product7Main.jpg';
import product8Main from './assets/product8Main.jpg';
import product9Main from './assets/product9Main.jpg';
import product10Main from './assets/product10Main.jpg';
import product11Main from './assets/product11Main.jpeg';
import product12Main from './assets/product12Main.jpg';
import product13Main from './assets/product13Main.jpg';
import dropdownImage from './assets/dropdown-image.png';

const products = [
  {
    name: 'Real Estate Sales',
    description: 'Real estate encompasses the land, plus any permanent man-made additions, such as houses and other buildings. Any additions or changes to the land that affects the propertys value are called an improvement. Once land is improved, the total capital and labor used to build the improvement represent a sizable fixed investment. Though a building can be razed, improvements like drainage, electricity, water, and sewer systems tend to be permanent.\n\nReal property includes the land and additions to the land plus the rights inherent to its ownership and usage.',
    image: product1, // Reference to the image source
    mainImage: product1Main, // Reference to the main content image source
  },


      {
    name: 'Mobile Apps',
    description: 'These are general modules that can be customized depending on the apps purpose and scope. You can also create more specialized modules for specific applications, like e-commerce, gaming, or healthcare.',
    image: product2,
    mainImage: product2Main, // Main content image
  },
  {
    name: 'Finance',
    description: 'Finance involves managing money and financial resources, including budgeting, investing, and planning for the future. It encompasses personal finance (like savings, expenses, and retirement planning), corporate finance (dealing with business operations and capital management), and public finance (related to government revenue and expenditure). Effective financial management ensures stability, growth, and the ability to meet financial goals.',
    image: product3,
    mainImage: product3Main, // Main content image
  },
  {
    name: 'Layout',
    description: 'This module has some unique features specially designed for the Real Estates, here you can seen the layout as designed by you and you can drill down from the layout to Plot Information. (Optional - Customer information with payment details). The Layout shows the plots Sold, Available, Registered etc. in different color codes. The layout is directly linked to the database and is interactive to the Allotment of Plots and Payments made by customers from time to time.Online Customer Enquiry Form can be generated on the Selected Vacant plots of the layout with the option to receive SMS alert against the enquiry.',
    image: product4,
    mainImage: product4Main, // Main content image
  },
  {
    name: 'Customer Relationship Management',
    description: 'Customer Relationship Management (CRM) involves managing a companys interactions with customers to improve relationships and drive business growth. It encompasses tracking customer data, automating communication, and providing tools for sales, marketing, and customer service. CRM aims to enhance customer satisfaction and retention by personalizing experiences and streamlining interactions. Successful CRM systems integrate with other business processes, fostering a customer-centric approach.',
    image: product5,
    mainImage: product5Main, // Main content image
  },
  {
    name: 'Telemarketing',
    description: 'Telemarketing involves contacting potential customers via phone to promote products or services. It often includes cold calling, lead generation, and follow-up sales. Successful telemarketing relies on effective scripts, strong communication skills, and adaptability. It is subject to regulations to ensure consumer privacy and consent.',
    image: product6,
    mainImage: product6Main, // Main content image
  },
  {
    name: 'Estates',
    description: 'Estates refer to the total assets, property, and liabilities a person owns or is entitled to, usually considered for purposes such as inheritance or wealth management. This concept encompasses real estate, financial assets, personal property, and other valuables. Estate planning involves managing and distributing these assets according to a will, trust, or other legal instruments. Proper estate management can help ensure that assets are distributed according to a persons wishes and can also address tax and legal considerations.',
    image: product7,
    mainImage: product7Main, // Main content image
  },
  {
    name: 'Human Resources',
    description: 'Human Resources (HR) manages employee relations, recruitment, benefits, and compliance within an organization. It oversees hiring, onboarding, and training while fostering a positive workplace culture. HR handles employee records, payroll, and performance evaluations. Additionally, it ensures legal compliance with labor laws and workplace regulations.',
    image: product8,
    mainImage: product8Main, // Main content image
  },
  {
    name: 'Cheque Writing',
    description: 'Date: Write the current date in the top-right corner, using the preferred format (e.g., MM/DD/YYYY).Payee: Fill in the recipients name or business in the Pay to the Order of line.Amount: Enter the numeric amount in the small box and the written amount on the longer line, ensuring they match.Signature: Sign your name at the bottom right to authorize the cheque.',
    image: product9,
    mainImage: product9Main, // Main content image
  },
  {
    name: 'Property Management',
    description: 'Property management involves overseeing and maintaining real estate assets, including rental properties, commercial spaces, and residential buildings. It encompasses tasks like tenant relations, maintenance, rent collection, and compliance with local regulations. Property managers act as intermediaries between property owners and tenants, ensuring smooth operations and resolving issues. The goal is to maximize property value, minimize vacancies, and provide a positive tenant experience.',
    image: product10,
    mainImage: product10Main, // Main content image
  },
  {
    name: 'Construction',
    description: 'Construction involves the planning, design, and building of structures, such as homes, commercial buildings, or infrastructure projects. It encompasses a variety of tasks, including site preparation, foundation laying, framing, and finishing work. Safety, compliance with building codes, and coordination among multiple stakeholders are crucial. Effective project management and skilled labor are key to successful construction projects.',
    image: product11,
    mainImage: product11Main, // Main content image
  },
  {
    name: 'Material Management',
    description: 'Material management involves the efficient planning, sourcing, purchasing, storing, and distributing of materials and supplies in an organization. It aims to ensure the right materials are available in the right quantity and quality at the right time and place. Effective material management minimizes costs, reduces waste, and enhances productivity. It plays a critical role in maintaining a smooth supply chain and supporting business operations.',
    image: product12,
    mainImage: product12Main, // Main content image
  },
  {
    name: 'Asset Management',
    description: 'Asset management is the process of acquiring, maintaining, and optimizing assets to achieve financial goals. It involves a strategic approach to allocating resources in various asset classes like stocks, bonds, real estate, and cash. Effective asset management balances risk and return to meet specific investment objectives. It plays a key role in ensuring sustainable growth and financial security.',
    image: product13,
    mainImage: product13Main, // Main content image
  },
  {
    name: 'Admin',
    description: 'An admin (administrator) manages systems, users, and resources to ensure smooth operation. They oversee security, troubleshoot issues, and maintain compliance with policies and regulations. Admins often set up and configure hardware and software, manage data backups, and coordinate with IT teams. Their role is crucial for organizational stability and efficiency.',
    image: product2,
    mainImage: product2Main, // Main content image
  },
  
];

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [isExpanded, setIsExpanded] = useState(false); // State to track dropdown status

  const handleToggle = () => {
    setIsExpanded((prev) => !prev); // Toggle expanded/collapsed state
  };

  return (
    <div className="app-container">
      {/* Top Section with Background Image */}
      <div className="top-section">
        <h1>Welcome to Our Product Showcase!</h1>
        <p>Explore our range of products and learn more about what we offer.</p>
      </div>

      <div className="description-container">
        <h4>Real Estate ERP (Real Estate Management and Accounting System)</h4>
        <p>
          Realex ERP is a complete ERP giving End to End Solution to the Real Estate Companies
          which are specially into open plot sales.Realex ERP is the Turn-key project of the Company in the field of computerization
              of Real Estates. The Product is an extract of 20-plus years of study over the Real
              Estates Companies.
        </p>
        <h5>The Real Estate-ERP is available in following Modules</h5>

        {/* Toggle Button to Expand/Collapse */}
        <button onClick={handleToggle} className="toggle-button">
          {isExpanded ? 'Show Less' : 'Show'}
        </button>

        {/* Additional content, visible when expanded */}
        {isExpanded && (
          <div className="dropdown-content">
            <p>
              
            </p>

            {/* Image in the dropdown */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img
      src={dropdownImage}
      alt="Real Estate Project"
      style={{ width: '80%', borderRadius: '10px' }}
    />
  </div>
          </div>
        )}
      </div>

      <div className="content">
        <div className="left-menu">
          <h2>Real Estate-ERP Features</h2>
          {products.map((product) => (
            <button
              key={product.name}
              onClick={() => setSelectedProduct(product)}
              className="product-button"
            >
              <img src={product.image} alt={product.name} />
              {product.name}
            </button>
          ))}
        </div>

        <div className="main-content">
          <div className="product-info">
            <h1>{selectedProduct.name}</h1>
            <p>{selectedProduct.description}</p>
          </div>
          <img
            className="main-product-image"
            src={selectedProduct.mainImage}
            alt={selectedProduct.name}
          />
          <p>{selectedProduct.description}</p>
        </div>
      </div>
    </div>
  );
};

export default App;