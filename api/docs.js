export default function handler(req, res) {
  const posthogKey = process.env.VITE_POSTHOG_KEY || '';
  const html = `<!DOCTYPE html>
<html lang="en" itemscope itemtype="https://schema.org/TechArticle">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Primary Meta Tags -->
    <title>AnswerLayer Agent API Documentation - Conversational Analytics Platform</title>
    <meta name="title" content="AnswerLayer Agent API Documentation - Conversational Analytics Platform">
    <meta name="description" content="Complete API documentation for AnswerLayer's conversational analytics platform. Embed natural language querying, semantic layers, and business intelligence into your applications with our REST API.">
    <meta name="keywords" content="API documentation, conversational analytics, natural language query API, semantic layer API, business intelligence API, embedded analytics, database API, PII detection API, REST API, developer documentation">
    <meta name="author" content="AnswerLayer">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://docs.getanswerlayer.com/">
    
    <!-- Language and Geographic Targeting -->
    <meta name="language" content="en-US">
    <meta name="geo.region" content="US">
    <meta name="geo.country" content="USA">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="AnswerLayer">
    <meta property="og:url" content="https://docs.getanswerlayer.com/">
    <meta property="og:title" content="AnswerLayer Agent API Documentation - Conversational Analytics Platform">
    <meta property="og:description" content="Complete API documentation for AnswerLayer's conversational analytics platform. Embed natural language querying, semantic layers, and business intelligence into your applications.">
    <meta property="og:image" content="https://getanswerlayer.com/og-image.jpg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="AnswerLayer API Documentation - Natural Language Query API">
    <meta property="og:locale" content="en_US">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:site" content="@getanswerlayer">
    <meta property="twitter:creator" content="@getanswerlayer">
    <meta property="twitter:url" content="https://docs.getanswerlayer.com/">
    <meta property="twitter:title" content="AnswerLayer Agent API Documentation">
    <meta property="twitter:description" content="REST API for embedding conversational analytics, natural language querying, and business intelligence into your applications.">
    <meta property="twitter:image" content="https://getanswerlayer.com/og-image.jpg">
    <meta property="twitter:image:alt" content="AnswerLayer API Documentation">
    
    <!-- LinkedIn -->
    <meta property="article:author" content="AnswerLayer">
    <meta property="article:published_time" content="2024-01-15T00:00:00Z">
    <meta property="article:modified_time" content="2024-01-15T00:00:00Z">
    <meta property="article:section" content="Technology">
    <meta property="article:tag" content="API">
    <meta property="article:tag" content="Analytics">
    <meta property="article:tag" content="Business Intelligence">
    <meta property="article:tag" content="Natural Language Processing">
    
    <!-- Schema.org Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": ["TechArticle", "APIReference"],
      "headline": "AnswerLayer Agent API Documentation - Conversational Analytics Platform",
      "description": "Complete REST API documentation for AnswerLayer's conversational analytics platform. Embed natural language querying, semantic layers, and business intelligence into your applications.",
      "image": "https://getanswerlayer.com/og-image.jpg",
      "author": {
        "@type": "Organization",
        "name": "AnswerLayer",
        "url": "https://getanswerlayer.com",
        "logo": "https://getanswerlayer.com/logo.png",
        "sameAs": [
          "https://twitter.com/getanswerlayer",
          "https://linkedin.com/company/answerlayer"
        ]
      },
      "publisher": {
        "@type": "Organization",
        "name": "AnswerLayer",
        "logo": {
          "@type": "ImageObject",
          "url": "https://getanswerlayer.com/logo.png"
        }
      },
      "datePublished": "2025-07-18T00:00:00Z",
      "dateModified": "2025-07-18T00:00:00Z",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://docs.getanswerlayer.com/"
      },
      "about": {
        "@type": "SoftwareApplication",
        "name": "AnswerLayer API",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Any",
        "description": "Conversational analytics platform API for embedding natural language querying and business intelligence",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free tier available"
        },
        "featureList": [
          "Natural Language Querying",
          "Semantic Layer Management", 
          "PII Detection and Protection",
          "Multi-tenant Data Isolation",
          "Real-time Analytics",
          "Chart Generation",
          "Database Connection Management"
        ]
      },
      "programmingLanguage": "JavaScript",
      "codeRepository": "https://github.com/answerlayer/public-api",
      "discussionUrl": "https://getanswerlayer.com/contact",
      "license": "https://getanswerlayer.com/terms"
    }
    </script>
    
    <!-- Additional Schema for API Documentation -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "APIReference",
      "name": "AnswerLayer Agent API",
      "description": "REST API for conversational analytics, natural language querying, and embedded business intelligence",
      "url": "https://docs.getanswerlayer.com/",
      "version": "Alpha",
      "programmingLanguage": ["JavaScript", "Python", "cURL", "Node.js"],
      "provider": {
        "@type": "Organization",
        "name": "AnswerLayer",
        "url": "https://getanswerlayer.com"
      },
      "documentation": "https://docs.getanswerlayer.com/",
      "termsOfService": "https://getanswerlayer.com/terms",
      "license": "https://getanswerlayer.com/terms",
             "potentialAction": {
         "@type": "ConsumeAction",
         "target": {
           "@type": "EntryPoint",
           "urlTemplate": "https://docs.getanswerlayer.com/#{+section}",
           "description": "API documentation section access"
         }
       }
    }
    </script>
    
    <!-- Favicon and Icons -->
    <link rel="icon" type="image/png" href="https://getanswerlayer.com/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="https://getanswerlayer.com/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="https://getanswerlayer.com/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="https://getanswerlayer.com/favicon-16x16.png">
    <link rel="manifest" href="https://getanswerlayer.com/site.webmanifest">
    
    <!-- DNS Prefetch and Performance Optimizations -->
    <link rel="dns-prefetch" href="//fonts.googleapis.com">
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="dns-prefetch" href="//unpkg.com">
    <link rel="dns-prefetch" href="//scripts.simpleanalyticscdn.com">
    <link rel="dns-prefetch" href="//us.i.posthog.com">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="https://unpkg.com/redoc@2.1.3/bundles/redoc.standalone.js" as="script">
    
    <!-- Additional SEO Meta Tags -->
    <meta name="theme-color" content="#1e293b">
    <meta name="msapplication-TileColor" content="#1e293b">
    <meta name="msapplication-config" content="https://getanswerlayer.com/browserconfig.xml">
    
    <!-- Structured Data for Software Application -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "SoftwareSourceCode",
      "name": "AnswerLayer Agent API",
      "description": "REST API client libraries and documentation for AnswerLayer's conversational analytics platform",
      "programmingLanguage": ["JavaScript", "Python", "cURL"],
      "runtimePlatform": "Web API",
      "targetProduct": {
        "@type": "SoftwareApplication",
        "name": "AnswerLayer Platform",
        "applicationCategory": "BusinessApplication"
      },
      "author": {
        "@type": "Organization",
        "name": "AnswerLayer"
      },
      "license": "https://getanswerlayer.com/terms",
      "codeRepository": "https://github.com/answerlayer/public-api"
    }
    </script>
    
    <!-- Knowledge Graph for Conversational Analytics -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "name": "Conversational Analytics",
      "description": "A technology that enables users to query and analyze data using natural language instead of complex SQL or BI tools",
      "termCode": "conversational-analytics",
      "inDefinedTermSet": {
        "@type": "DefinedTermSet",
        "name": "Business Intelligence Terminology",
        "description": "Terms related to business intelligence and data analytics"
      }
    }
    </script>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --navy-50: #f8fafc;
            --navy-100: #f1f5f9;
            --navy-200: #e2e8f0;
            --navy-300: #cbd5e1;
            --navy-400: #94a3b8;
            --navy-500: #64748b;
            --navy-600: #475569;
            --navy-700: #334155;
            --navy-800: #1e293b;
            --navy-900: #0f172a;
            --navy-950: #020617;
        }
        
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: var(--navy-50);
            color: var(--navy-900);
            line-height: 1.6;
        }
        
        .header {
            background: linear-gradient(135deg, var(--navy-800) 0%, var(--navy-700) 50%, var(--navy-600) 100%);
            color: white;
            padding: 3rem 0;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(ellipse at top left, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
                        radial-gradient(ellipse at bottom right, rgba(168, 85, 247, 0.15) 0%, transparent 50%);
            pointer-events: none;
        }
        
        .header-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            z-index: 1;
        }
        
        .logo-section {
            display: flex;
            align-items: center;
            gap: 1.5rem;
        }
        
        .logo {
            height: 48px;
            width: auto;
        }
        
        .header h1 {
            margin: 0;
            font-family: 'Cormorant Garamond', serif;
            font-size: 2.5rem;
            font-weight: 600;
            color: white;
            letter-spacing: -0.025em;
        }
        
        .header p {
            margin: 0.5rem 0 0 0;
            font-size: 1.125rem;
            opacity: 0.9;
            color: var(--navy-200);
            font-weight: 400;
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
        }
        
        .nav-link {
            color: var(--navy-200);
            text-decoration: none;
            font-weight: 500;
            font-size: 1rem;
            transition: all 0.2s ease;
            padding: 0.5rem 0;
            border-bottom: 2px solid transparent;
        }
        
        .nav-link:hover {
            color: white;
            border-bottom-color: rgba(59, 130, 246, 0.6);
        }
        
        .cta-button {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.5rem;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .cta-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: 0 8px 15px -3px rgba(0, 0, 0, 0.1);
        }
        
        .content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0;
            background: white;
            box-shadow: 0 0 0 1px var(--navy-200);
        }
        
        /* Redoc customization */
        .redoc-container {
            margin: 0;
            padding: 0;
        }
        
        .redoc-wrap {
            background: white;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 12px;
        }
        
        ::-webkit-scrollbar-track {
            background: var(--navy-100);
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--navy-300);
            border-radius: 6px;
            border: 2px solid var(--navy-100);
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: var(--navy-400);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .header {
                padding: 2rem 0;
            }
            
            .header-content {
                flex-direction: column;
                gap: 1.5rem;
                text-align: center;
            }
            
            .nav-links {
                flex-direction: column;
                gap: 1rem;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .header p {
                font-size: 1rem;
            }
            
            .logo-section {
                flex-direction: column;
                gap: 1rem;
            }
        }
        
        @media (max-width: 480px) {
            .header-content {
                padding: 0 1rem;
            }
            
            .header h1 {
                font-size: 1.75rem;
            }
            
            .cta-button {
                padding: 0.625rem 1.25rem;
                font-size: 0.9rem;
            }
        }
    </style>
</head>
<body>
    <header class="header" role="banner">
        <div class="header-content">
            <div class="logo-section">
                <div itemscope itemtype="https://schema.org/Organization">
                    <h1 itemprop="name">AnswerLayer Agent API</h1>
                    <p itemprop="description">Conversational Analytics Platform</p>
                    <meta itemprop="url" content="https://getanswerlayer.com">
                    <meta itemprop="logo" content="https://getanswerlayer.com/logo.png">
                </div>
            </div>
            <nav class="nav-links" role="navigation" aria-label="Main navigation">
                <a href="https://getanswerlayer.com" class="nav-link" rel="noopener">Home</a>
                <a href="https://getanswerlayer.com/pricing" class="nav-link" rel="noopener">Pricing</a>
                <a href="https://getanswerlayer.com/sign-up" class="cta-button" rel="noopener">Get Started</a>
            </nav>
        </div>
    </header>

    <!-- Hidden structured content for AI and search engines -->
    <div style="display: none;" aria-hidden="true">
        <!-- FAQ content for AEO -->
        <section itemscope itemtype="https://schema.org/FAQPage">
            <h2>Frequently Asked Questions about AnswerLayer API</h2>
            
            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">What is AnswerLayer API?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">AnswerLayer API is a conversational analytics platform that allows you to embed natural language querying, semantic layers, and business intelligence into your applications. It provides REST endpoints for managing database connections, detecting PII, and generating answers from natural language questions.</div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">How does natural language querying work?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">AnswerLayer converts natural language questions into SQL queries using AI and semantic layer definitions. Users can ask questions like "What were our top products last quarter?" and receive structured data responses with automatically generated charts.</div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">What databases does AnswerLayer support?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">AnswerLayer supports PostgreSQL, MySQL, Snowflake, BigQuery, Redshift, and SQL Server. The API provides unified access regardless of your underlying database technology.</div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">How does PII detection work?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">AnswerLayer automatically detects personally identifiable information (PII) in your database columns using AI analysis. It provides endpoints to scan for PII, update column protection settings, and get summary reports of data privacy compliance.</div>
                </div>
            </div>

            <div itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h3 itemprop="name">Is the API secure for multi-tenant applications?</h3>
                <div itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">Yes, AnswerLayer provides built-in multi-tenant data isolation. Each client only has access to their own data, with automatic scoping and filtering enforced at the API level.</div>
                </div>
            </div>
        </section>

        <!-- Technical specifications for AI engines -->
        <section itemscope itemtype="https://schema.org/TechArticle">
            <h2>API Technical Specifications</h2>
            <meta itemprop="about" content="REST API for conversational analytics and business intelligence">
            <div itemprop="articleBody">
                <p>Base URL: https://docs.getanswerlayer.com/v1</p>
                <p>Authentication: Bearer token (API key)</p>
                <p>Content Type: application/json</p>
                <p>Rate Limits: Varies by plan</p>
                <p>API Version: Alpha</p>
                
                <h3>Main Endpoint Categories:</h3>
                <ul>
                    <li>Connections: Manage database connections and schema analysis</li>
                    <li>Semantic Layer: CRUD operations for entities, relationships, filters, dimensions, measures, and metrics</li>
                    <li>PII Protection: Detect and manage personally identifiable information</li>
                    <li>Answers: Natural language question processing and chart generation</li>
                    <li>Admin: Client and user management for multi-tenant applications</li>
                    <li>Chain Management: Conversation history and follow-up questions</li>
                </ul>

                <h3>Key Features:</h3>
                <ul>
                    <li>Natural language to SQL conversion</li>
                    <li>AI-powered semantic layer generation</li>
                    <li>Automatic PII detection and protection</li>
                    <li>Multi-tenant data isolation</li>
                    <li>Real-time chart generation</li>
                    <li>Conversation chain management</li>
                    <li>Support for major database platforms</li>
                </ul>
            </div>
        </section>
    </div>

    <main class="content" role="main" itemscope itemtype="https://schema.org/WebApplication">
        <meta itemprop="name" content="AnswerLayer API Documentation">
        <meta itemprop="description" content="Interactive API documentation for AnswerLayer's conversational analytics platform">
        <meta itemprop="applicationCategory" content="DeveloperApplication">
        <meta itemprop="operatingSystem" content="Web Browser">
        
        <!-- Breadcrumb for better navigation -->
        <nav aria-label="Breadcrumb" style="display: none;">
            <ol itemscope itemtype="https://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a itemprop="item" href="https://getanswerlayer.com">
                        <span itemprop="name">AnswerLayer</span>
                    </a>
                    <meta itemprop="position" content="1" />
                </li>
                <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <a itemprop="item" href="https://docs.getanswerlayer.com">
                        <span itemprop="name">API Documentation</span>
                    </a>
                    <meta itemprop="position" content="2" />
                </li>
            </ol>
        </nav>

        <div id="redoc-container" class="redoc-container" role="document" aria-label="API Documentation"></div>
    </main>

    <!-- Footer with additional structured data -->
    <footer style="display: none;" aria-hidden="true">
        <div itemscope itemtype="https://schema.org/ContactPoint">
            <meta itemprop="contactType" content="technical support">
            <meta itemprop="url" content="https://getanswerlayer.com/contact">
            <meta itemprop="email" content="josh@getanswerlayer.com">
        </div>
        
        <div itemscope itemtype="https://schema.org/Organization">
            <meta itemprop="name" content="AnswerLayer">
            <meta itemprop="url" content="https://getanswerlayer.com">
            <meta itemprop="logo" content="https://getanswerlayer.com/logo.png">
            <meta itemprop="foundingDate" content="2024">
            <meta itemprop="description" content="Conversational analytics platform for embedding natural language querying into applications">
            <div itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                <meta itemprop="addressCountry" content="US">
            </div>
        </div>
    </footer>

    <script src="https://unpkg.com/redoc@2.1.3/bundles/redoc.standalone.js"></script>
    <script src="https://unpkg.com/posthog-js@1.255.1/dist/posthog.min.js"></script>
    <!-- Simple Analytics -->
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
    <script>
        // Analytics initialization and utilities
        (function() {
            // Check if we're on localhost
            const isLocalhost = () => {
                const hostname = window.location.hostname;
                return hostname === 'localhost' || hostname === '127.0.0.1';
            };

            // PostHog initialization
            const initializePostHog = () => {
                // Environment variables injected from Vercel serverless function
                const posthogKey = '${posthogKey}';
                const posthogHost = 'https://us.i.posthog.com';
                
                if (!posthogKey) {
                    console.log('[PostHog] API key not configured, skipping initialization');
                    return;
                }

                // Skip PostHog initialization on localhost unless explicitly enabled
                if (isLocalhost()) {
                    console.log('[PostHog] Disabled on localhost environment');
                    return;
                }

                // Check if PostHog is loaded
                if (typeof posthog === 'undefined') {
                    console.log('[PostHog] Library not loaded yet, retrying...');
                    setTimeout(initializePostHog, 100);
                    return;
                }

                try {
                    posthog.init(posthogKey, {
                        api_host: posthogHost,
                        person_profiles: 'identified_only', // GDPR compliant
                        
                        // Page tracking
                        capture_pageview: true,
                        capture_pageleave: true,
                        capture_dead_clicks: true,
                        capture_performance: true,
                        
                        // Session recordings for UX insights
                        session_recording: {
                            recordCrossOriginIframes: false,
                            maskAllInputs: true,
                            maskInputOptions: {
                                password: true,
                                email: false,
                                tel: true,
                            },
                        },
                        
                        // Autocapture events
                        autocapture: {
                            css_selector_allowlist: [
                                'button',
                                'a',
                                'input[type="submit"]',
                                'input[type="button"]',
                                '[role="button"]',
                                '.btn',
                                '[data-track]',
                                // Redoc specific selectors
                                '.redoc-wrap *',
                                '[class*="operation"]',
                                '[class*="schema"]',
                                '[class*="endpoint"]'
                            ],
                            url_allowlist: [
                                'docs.getanswerlayer.com',
                                'getanswerlayer.com',
                                'localhost',
                            ],
                        },
                        
                        // Privacy and performance
                        respect_dnt: true,
                        opt_out_capturing_by_default: false,
                        
                        loaded: (posthog) => {
                            console.log('[PostHog] Successfully initialized for API docs');
                            
                            // Enable debug mode on localhost
                            if (isLocalhost()) {
                                posthog.debug();
                                console.log('[PostHog] Debug mode enabled for localhost');
                            }
                        }
                    });

                    // Track initial page view with context
                    posthog.capture('api_docs_page_view', {
                        page_title: document.title,
                        page_url: window.location.href,
                        referrer: document.referrer,
                        user_agent: navigator.userAgent,
                        timestamp: new Date().toISOString()
                    });

                } catch (error) {
                    console.error('[PostHog] Failed to initialize:', error);
                }
            };

            // Analytics utility functions
            window.analytics = {
                track: (eventName, properties = {}) => {
                    console.log('[Analytics] Tracking event:', eventName, properties);
                    
                    // PostHog tracking
                    if (typeof posthog !== 'undefined' && posthog.capture) {
                        posthog.capture(eventName, {
                            ...properties,
                            source: 'api_docs',
                            timestamp: new Date().toISOString()
                        });
                    }
                    
                    // SimpleAnalytics tracking
                    if (typeof window.sa_event === 'function') {
                        try {
                            window.sa_event(eventName, properties);
                        } catch (error) {
                            console.error('[SimpleAnalytics] Error sending event:', error);
                        }
                    }
                },

                // Track API endpoint interactions
                trackEndpoint: (endpoint, method, action = 'viewed') => {
                    window.analytics.track('api_endpoint_interaction', {
                        endpoint: endpoint,
                        method: method,
                        action: action,
                        section: window.analytics.getCurrentSection()
                    });
                },

                // Track schema interactions
                trackSchema: (schemaName, action = 'viewed') => {
                    window.analytics.track('api_schema_interaction', {
                        schema: schemaName,
                        action: action,
                        section: window.analytics.getCurrentSection()
                    });
                },

                // Get current documentation section
                getCurrentSection: () => {
                    const hash = window.location.hash;
                    if (hash.includes('operation/')) {
                        return 'endpoint';
                    } else if (hash.includes('schema/')) {
                        return 'schema';
                    } else if (hash.includes('tag/')) {
                        return 'tag';
                    }
                    return 'overview';
                },

                // Track search usage
                trackSearch: (query, resultsCount = null) => {
                    window.analytics.track('api_docs_search', {
                        query: query,
                        results_count: resultsCount,
                        section: window.analytics.getCurrentSection()
                    });
                },

                // Track external links
                trackExternalLink: (url, linkText = '') => {
                    window.analytics.track('api_docs_external_link', {
                        destination_url: url,
                        link_text: linkText,
                        source_section: window.analytics.getCurrentSection()
                    });
                }
            };

            // Initialize analytics
            initializePostHog();

            // Track hash changes (navigation within docs)
            let lastHash = window.location.hash;
            const trackHashChange = () => {
                const currentHash = window.location.hash;
                if (currentHash !== lastHash) {
                    window.analytics.track('api_docs_navigation', {
                        from_hash: lastHash,
                        to_hash: currentHash,
                        from_section: window.analytics.getCurrentSection(),
                        navigation_type: 'hash_change'
                    });
                    lastHash = currentHash;
                }
            };

            // Listen for hash changes
            window.addEventListener('hashchange', trackHashChange);

            // Track clicks on external links
            document.addEventListener('click', (event) => {
                const link = event.target.closest('a');
                if (link && link.href) {
                    const url = new URL(link.href);
                    const currentDomain = window.location.hostname;
                    
                    // Track external links
                    if (url.hostname !== currentDomain && url.hostname !== '') {
                        window.analytics.trackExternalLink(link.href, link.textContent || '');
                    }
                }
            });

            // Track time spent on page
            let pageStartTime = Date.now();
            window.addEventListener('beforeunload', () => {
                const timeSpent = Math.round((Date.now() - pageStartTime) / 1000);
                window.analytics.track('api_docs_session_end', {
                    time_spent_seconds: timeSpent,
                    final_section: window.analytics.getCurrentSection()
                });
            });

            // Track successful API spec load
            window.addEventListener('load', () => {
                window.analytics.track('api_docs_loaded', {
                    load_time: Date.now() - pageStartTime,
                    page_url: window.location.href,
                    referrer: document.referrer,
                    user_agent: navigator.userAgent,
                    screen_resolution: screen.width + 'x' + screen.height,
                    viewport_size: window.innerWidth + 'x' + window.innerHeight,
                    connection_type: navigator.connection?.effectiveType || 'unknown'
                });

                // Track SEO/AEO specific metrics
                window.analytics.track('seo_page_metrics', {
                    title_length: document.title.length,
                    meta_description_length: document.querySelector('meta[name="description"]')?.content?.length || 0,
                    h1_count: document.querySelectorAll('h1').length,
                    structured_data_count: document.querySelectorAll('script[type="application/ld+json"]').length,
                    has_canonical: !!document.querySelector('link[rel="canonical"]'),
                    has_open_graph: !!document.querySelector('meta[property^="og:"]'),
                    page_language: document.documentElement.lang
                });

                // Track if page was reached via search engine
                const searchEngineReferrers = [
                    'google.com', 'bing.com', 'yahoo.com', 'duckduckgo.com', 
                    'baidu.com', 'yandex.com', 'perplexity.ai', 'you.com'
                ];
                const referrerDomain = document.referrer ? new URL(document.referrer).hostname : '';
                const fromSearchEngine = searchEngineReferrers.some(se => referrerDomain.includes(se));
                
                if (fromSearchEngine) {
                    window.analytics.track('organic_search_visit', {
                        search_engine: referrerDomain,
                        landing_page: window.location.pathname,
                        query_params: window.location.search
                    });
                }

                // Track if accessed via AI answer engine
                const aiEngineReferrers = ['perplexity.ai', 'you.com', 'phind.com', 'openai.com'];
                const fromAIEngine = aiEngineReferrers.some(ai => referrerDomain.includes(ai));
                
                if (fromAIEngine) {
                    window.analytics.track('ai_engine_referral', {
                        ai_engine: referrerDomain,
                        landing_page: window.location.pathname
                    });
                }
            });

        })();

        // Initialize Redoc with AnswerLayer brand styling
        Redoc.init(
            '/answerlayer-public-api-spec.yaml',
            {
                theme: {
                    colors: {
                        primary: {
                            main: '#1e293b',
                            light: '#334155',
                            dark: '#0f172a'
                        },
                        secondary: {
                            main: '#3b82f6',
                            light: '#60a5fa',
                            dark: '#1d4ed8'
                        },
                        success: {
                            main: '#10b981',
                            light: '#34d399',
                            dark: '#047857'
                        },
                        warning: {
                            main: '#f59e0b',
                            light: '#fbbf24',
                            dark: '#d97706'
                        },
                        error: {
                            main: '#ef4444',
                            light: '#f87171',
                            dark: '#dc2626'
                        },
                        gray: {
                            50: '#f8fafc',
                            100: '#f1f5f9',
                            200: '#e2e8f0',
                            300: '#cbd5e1',
                            400: '#94a3b8',
                            500: '#64748b',
                            600: '#475569',
                            700: '#334155',
                            800: '#1e293b',
                            900: '#0f172a'
                        },
                        border: {
                            dark: '#e2e8f0',
                            light: '#f1f5f9'
                        },
                        text: {
                            primary: '#0f172a',
                            secondary: '#475569'
                        }
                    },
                    typography: {
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: '15px',
                        lineHeight: '1.6',
                        fontWeightRegular: '500',
                        fontWeightBold: '600',
                        code: {
                            fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                            fontSize: '13px',
                            backgroundColor: '#f1f5f9',
                            color: '#1e293b'
                        },
                        headings: {
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            fontWeight: '600',
                            lineHeight: '1.4'
                        },
                        links: {
                            color: '#3b82f6',
                            visited: '#1d4ed8',
                            hover: '#1e40af'
                        }
                    },
                    sidebar: {
                        width: '320px',
                        backgroundColor: '#f8fafc',
                        borderColor: '#e2e8f0',
                        textColor: '#1e293b'
                    },
                    rightPanel: {
                        backgroundColor: '#1e293b',
                        width: '45%',
                        textColor: '#e2e8f0'
                    },
                    codeBlock: {
                        backgroundColor: '#0f172a'
                    },
                    fab: {
                        backgroundColor: '#3b82f6',
                        color: '#ffffff'
                    }
                },
                scrollYOffset: 0,
                hideDownloadButton: false,
                disableSearch: false,
                expandResponses: '200,201',
                showExtensions: true,
                hideHostname: false,
                hideInfoDescription: false,
                hideInfoVersion: false,
                hideSchemaPattern: false,
                expandDefaultServerVariables: true,
                maxDisplayedEnumValues: 10,
                jsonSampleExpandLevel: 2,
                hideRequestPayloadSample: false,
                showObjectSchemaExamples: true,
                showExtensions: ['x-badges', 'x-code-samples'],
                sortPropsAlphabetically: false,
                payloadSampleIdx: 0,
                expandSingleSchemaField: false,
                schemaExpansionLevel: 0,
                showSecuritySchemeType: true,
                hideSecuritySection: false,
                unstable_ignoreMimeTypeErrors: false,
                requiredPropsFirst: true,
                noAutoAuth: false,
                pathInMiddlePanel: false,
                hideLoading: false,
                showConsole: true,
                nativeScrollbars: false,
                usePathOperationAsName: false
            },
            document.getElementById('redoc-container')
        ).then(() => {
            // Track successful Redoc initialization
            if (window.analytics) {
                window.analytics.track('api_docs_redoc_initialized', {
                    spec_url: '../answerlayer-public-api-spec.yaml',
                    initialization_time: Date.now() - pageStartTime
                });
            }

            // Add additional analytics hooks after Redoc loads
            setTimeout(() => {
                // Track API section interactions
                const observer = new MutationObserver((mutations) => {
                    mutations.forEach((mutation) => {
                        if (mutation.type === 'childList') {
                            // Check for operation clicks
                            mutation.addedNodes.forEach((node) => {
                                if (node.nodeType === 1 && node.classList) {
                                    if (node.classList.contains('operation') || 
                                        node.querySelector && node.querySelector('.operation')) {
                                        // Operation expanded/viewed
                                        const operationElement = node.classList.contains('operation') ? node : node.querySelector('.operation');
                                        if (operationElement) {
                                            const method = operationElement.querySelector('[class*="method"]')?.textContent;
                                            const endpoint = operationElement.querySelector('[class*="path"]')?.textContent;
                                            if (method && endpoint && window.analytics) {
                                                window.analytics.trackEndpoint(endpoint, method, 'expanded');
                                            }
                                        }
                                    }
                                }
                            });
                        }
                    });
                });

                // Start observing
                const redocContainer = document.getElementById('redoc-container');
                if (redocContainer) {
                    observer.observe(redocContainer, {
                        childList: true,
                        subtree: true
                    });
                }
            }, 1000);
        }).catch((error) => {
            console.error('[Redoc] Failed to initialize:', error);
            if (window.analytics) {
                window.analytics.track('api_docs_redoc_error', {
                    error_message: error.message,
                    spec_url: '../answerlayer-public-api-spec.yaml'
                });
            }
        });
    </script>
</body>
</html>`;

    // SEO-optimized response headers
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600, s-maxage=7200'); // Cache for 1 hour, CDN for 2 hours
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    
    // Add Vary header for better caching
    res.setHeader('Vary', 'Accept-Encoding, User-Agent');
    
    // Add sitemap reference
    res.setHeader('Link', '<https://docs.getanswerlayer.com/sitemap.xml>; rel="sitemap"; type="application/xml"');
    
    res.status(200).send(html);
} 