# AnswerLayer Public API

**Embed conversational analytics into your products**

The AnswerLayer API enables you to add natural language querying and business intelligence to your applications. Build data-driven customer experiences where users can ask questions in plain English and get instant insights with automatically generated charts - all while maintaining perfect data isolation between your customers.

## 🚀 What You Can Build

### **SaaS Analytics Features**
Add conversational analytics to your SaaS product. Your customers can ask "Show me my top performing campaigns" and get instant insights about their own data, completely isolated from other customers.

### **Customer-Facing Dashboards**
Transform static reporting into interactive conversations. Each customer gets access to their own data through natural language queries with automatic chart generation.

### **Embedded Business Intelligence**
Build data products where non-technical users can explore complex datasets. From financial SaaS to marketing platforms, enable customers to get insights without SQL knowledge.

### **Multi-Tenant Data Apps**
Create applications where multiple organizations safely share infrastructure while maintaining complete data privacy. Perfect for B2B SaaS platforms, agencies, and managed service providers.

## ✨ Key Features

### **Natural Language Processing**
- Ask questions in plain English and get SQL + visualizations
- AI-powered semantic layer generation from database schemas
- Intelligent follow-up suggestions and conversation chains
- Context-aware query understanding

### **PII Detection & Protection**
- Automatic AI-powered PII detection in database columns
- Granular column-level privacy controls
- Compliance-ready data protection
- User override capabilities for false positives

### **Semantic Layer Management**
- CRUD operations for entities, relationships, filters, dimensions, measures, and metrics
- AI-assisted generation with custom prompts
- Modular architecture for flexible data modeling
- Version control and validation

### **Multi-Tenant Architecture**
- Built-in data isolation per client
- Automatic scoping and filtering
- Client and user management APIs
- Secure API key authentication

### **Enterprise-Ready**
- Support for PostgreSQL, MySQL, Snowflake, BigQuery, Redshift, SQL Server
- RESTful API design with comprehensive documentation
- Rate limiting and usage controls
- Scalable cloud infrastructure

## 🏗️ How It Works

```
Your Organization (API Customer)
├── Database Connections (Your Data Warehouse)
├── Semantic Layer (How Data is Understood)
├── Clients (Your Customers)
│   ├── Users (Individuals using your product)
│   ├── Answers & Chains of Answers (Auto-scoped to client data)
│   └── Charts & Visualizations
└── API Keys & Authentication
```

## 📊 Example Use Cases

### **Natural Language Query**
```bash
curl -X POST https://developers.getanswerlayer.com/v1/answer \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "question": "What were our top 5 products by revenue last quarter?",
    "client_id": "client_123",
    "user_id": "user_456"
  }'
```

### **PII Detection & Protection**
```bash
curl -X POST https://developers.getanswerlayer.com/v1/connections/conn_123/pii/detect \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "connection_id": "conn_123",
    "force_redetection": false
  }'
```

### **Semantic Layer Generation**
```bash
curl -X POST https://developers.getanswerlayer.com/v1/connections/conn_123/generate \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "prompt": "This is an e-commerce platform. Focus on customer behavior and revenue metrics.",
    "options": {
      "auto_discover_metrics": true,
      "include_common_filters": true,
      "industry": "e-commerce"
    }
  }'
```

### **Client Management**
```bash
curl -X POST https://developers.getanswerlayer.com/v1/admin/clients \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "name": "Acme Corp Dashboard",
    "domain": "dashboard.acme.com",
    "description": "Analytics dashboard for Acme Corp"
  }'
```

## 🎯 Perfect For

### **SaaS Product Teams**
Add conversational analytics to your B2B product without building AI infrastructure. Give your customers self-service insights that increase engagement and reduce churn.

### **Data Product Builders** 
Create customer-facing analytics experiences where each user gets secure access to their own data through natural language queries.

### **B2B Platform Developers**
Build multi-tenant applications with embedded analytics. Perfect for marketing platforms, financial tools, and business management software.

### **Agencies & Consultants**
Offer white-label analytics dashboards to your clients. Each client gets their own secure data environment with conversational querying capabilities.

## 🚀 Get Started

### **1. Get Your API Key**
[Sign up for AnswerLayer](https://getanswerlayer.com/sign-up) and generate your API key from the dashboard.

### **2. Connect Your Database**
Link your data warehouse (PostgreSQL, Snowflake, BigQuery, etc.) through our secure connection management API.

### **3. Generate Your Semantic Layer**
Use AI to automatically generate entities, relationships, and metrics from your database schema, or define them manually.

### **4. Create Clients & Users**
Set up your customers as clients in the system. Each client gets automatic data isolation and their own analytics environment.

### **5. Start Querying**
Enable natural language queries for your users. They ask questions, get SQL results, and see auto-generated charts - all scoped to their data.

## 📖 Documentation

- **[API Reference](https://docs.getanswerlayer.com)** - Complete endpoint documentation with interactive examples
- **[Quick Start Guide](https://getanswerlayer.com/docs/quickstart)** - Get up and running in minutes  
- **[Integration Examples](https://getanswerlayer.com/docs/examples)** - Real-world implementation patterns
- **[SDKs & Libraries](https://getanswerlayer.com/docs/sdks)** - Official client libraries for popular languages

## 💬 Support & Community

- **[Help Center](https://getanswerlayer.com/help)** - Documentation and guides
- **[API Status](https://status.getanswerlayer.com)** - Real-time API status  
- **[Developer Community](https://community.getanswerlayer.com)** - Connect with other developers
- **[Email Support](mailto:josh@getanswerlayer.com)** - Direct technical support

## 🔧 Enterprise Features

### **Advanced Security**
- SSO integration
- Advanced access controls
- Audit logging and compliance

### **Custom Deployment**
- On-premises deployment options
- Private cloud instances
- Custom SLA agreements

### **Dedicated Support**
- Priority technical support
- Custom integration assistance
- Training and onboarding

**Ready to transform your data into conversations?**  
[Start your free trial today →](https://getanswerlayer.com/app)

---

**Questions?** Reach out to our team at [hello@getanswerlayer.com](mailto:hello@getanswerlayer.com) 