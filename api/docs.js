export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AnswerLayer Public API Documentation</title>
    <link rel="icon" type="image/png" href="https://getanswerlayer.com/favicon.ico">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            box-sizing: border-box;
        }
        
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #ffffff;
            color: #1a1a1a;
        }
        
        .header {
            background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
            color: white;
            padding: 2rem 0;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .header-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .logo-section {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .logo {
            height: 40px;
            width: auto;
        }
        
        .header h1 {
            margin: 0;
            font-size: 1.875rem;
            font-weight: 700;
            color: white;
        }
        
        .header p {
            margin: 0.5rem 0 0 0;
            font-size: 1rem;
            opacity: 0.9;
            color: rgba(255, 255, 255, 0.8);
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
        }
        
        .nav-link {
            color: rgba(255, 255, 255, 0.9);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
        }
        
        .nav-link:hover {
            color: white;
        }
        
        .cta-button {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.375rem;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.2s;
            backdrop-filter: blur(4px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .cta-button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
        }
        
        .content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0;
        }
        
        /* Redoc customization */
        .redoc-container {
            margin: 0;
            padding: 0;
        }
        
        .redoc-wrap {
            background: #ffffff;
        }
        
        /* Custom scrollbar for better UX */
        ::-webkit-scrollbar {
            width: 8px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .header-content {
                flex-direction: column;
                gap: 1rem;
                text-align: center;
            }
            
            .nav-links {
                flex-direction: column;
                gap: 1rem;
            }
            
            .header h1 {
                font-size: 1.5rem;
            }
            
            .header p {
                font-size: 0.875rem;
            }
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="header-content">
            <div class="logo-section">
                <div>
                    <h1>AnswerLayer Public API</h1>
                    <p>Conversational Analytics Platform</p>
                </div>
            </div>
            <nav class="nav-links">
                <a href="https://getanswerlayer.com" class="nav-link">Home</a>
                <a href="https://getanswerlayer.com/pricing" class="nav-link">Pricing</a>
                <a href="https://getanswerlayer.com/app" class="cta-button">Get Started</a>
            </nav>
        </div>
    </div>

    <div class="content">
        <div id="redoc-container" class="redoc-container"></div>
    </div>

    <script src="https://unpkg.com/redoc@2.1.3/bundles/redoc.standalone.js"></script>
    <script>
        // Initialize Redoc
        Redoc.init(
            '../answerlayer-public-api-spec.yaml',
            {
                theme: {
                    colors: {
                        primary: {
                            main: '#3b82f6'
                        },
                        success: {
                            main: '#10b981'
                        },
                        warning: {
                            main: '#f59e0b'
                        },
                        error: {
                            main: '#ef4444'
                        },
                        gray: {
                            50: '#f8fafc',
                            100: '#f1f5f9'
                        }
                    },
                    typography: {
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontSize: '14px',
                        lineHeight: '1.5',
                        code: {
                            fontFamily: 'Monaco, "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace',
                            fontSize: '13px'
                        },
                        headings: {
                            fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                            fontWeight: '600'
                        }
                    },
                    sidebar: {
                        width: '300px',
                        backgroundColor: '#f8fafc'
                    },
                    rightPanel: {
                        backgroundColor: '#1e293b',
                        width: '40%'
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
                unstable_ignoreMimeTypeErrors: false
            },
            document.getElementById('redoc-container')
        );
    </script>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.status(200).send(html);
} 