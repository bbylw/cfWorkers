export default {
  async fetch(request) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'text/html',
    }

    const html = `
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>互联网自由与世界人权宣言</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            min-height: 100vh;
            background: #000;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 2rem;
            transition: all 0.3s ease;
            line-height: 1.8;
        }

        .container {
            max-width: 900px;
            background: #1a1a1a;
            border-radius: 16px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
            padding: 3rem;
            margin: 2rem;
        }

        .header {
            text-align: center;
            margin-bottom: 3rem;
        }

        .title {
            font-size: 2.5rem;
            font-weight: 600;
            color: #ff9900;
            margin-bottom: 1rem;
            letter-spacing: 2px;
        }

        .subtitle {
            font-size: 1.2rem;
            color: #ccc;
            font-weight: 300;
        }

        .content {
            font-size: 1.1rem;
            color: #ddd;
            line-height: 2;
        }

        .paragraph {
            margin-bottom: 1.5rem;
            padding: 1rem;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .paragraph:hover {
            background: rgba(255, 153, 0, 0.1);
            transform: translateX(10px);
        }

        .link {
            display: inline-block;
            padding: 1rem 2rem;
            background: #ff9900;
            color: #000;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 500;
            margin-top: 2rem;
            transition: all 0.3s ease;
        }

        .link:hover {
            background: #fff;
            color: #ff9900;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 153, 0, 0.2);
        }

        .toggle {
            position: fixed;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: #fff;
            cursor: pointer;
            padding: 0.5rem;
            transition: all 0.3s ease;
            z-index: 100;
        }

        .toggle:hover {
            color: #ff9900;
        }

        @media (max-width: 768px) {
            .container {
                padding: 2rem;
                margin: 1rem;
            }
            
            .title {
                font-size: 2rem;
            }
            
            .content {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <button class="toggle" id="themeToggle">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    </button>

    <div class="container">
        <div class="header">
            <div class="title">互联网自由</div>
            <div class="subtitle">现代互联网的自由与权利</div>
        </div>
        <div class="content">
            <div class="paragraph">
                互联网自由是指在数字时代，个人能够自由地访问、使用、创建和分享信息的权利。这包括言论自由、隐私保护和信息获取的权利。
            </div>
            <div class="paragraph">
                互联网的开放性和中立性是确保信息自由流动的关键。任何形式的审查和限制都可能对社会进步和创新产生负面影响。
            </div>
            <div class="paragraph">
                保护互联网自由需要全球的合作和努力，以确保每个人都能平等地享有数字时代的权利和机会。
            </div>
            <a href="https://www.eff.org/issues/net-neutrality" class="link" target="_blank">
                了解更多关于互联网自由
            </a>
        </div>
    </div>

    <div class="container">
        <div class="header">
            <div class="title">世界人权宣言</div>
            <div class="subtitle">序言</div>
        </div>
        <div class="content">
            <div class="paragraph">
                鉴于对人类家庭所有成员的固有尊严及其平等的和不移的权利的承认，乃是世界自由、正义与和平的基础，
            </div>
            <div class="paragraph">
                鉴于对人权的无视和侮蔑已发展为野蛮暴行，这些暴行玷污了人类的良心，而一个人人享有言论和信仰自由并免予恐惧和匮乏的世界的来临，已被宣布为普通人民的最高愿望，
            </div>
            <div class="paragraph">
                鉴于为使人类不致迫不得已铤而走险对暴政和压迫进行反叛，有必要使人权受法治的保护，
            </div>
            <div class="paragraph">
                鉴于有必要促进各国间友好关系的发展，
            </div>
            <div class="paragraph">
                鉴于各联合国国家的人民已在联合国宪章中重申他们对基本人权、人格尊严和价值以及男女平等权利的信念，并决心促成较大自由中的社会进步和生活水平的改善，
            </div>
            <div class="paragraph">
                鉴于各会员国业已誓愿同联合国合作以促进对人权和基本自由的普遍尊重和遵行，
            </div>
            <div class="paragraph">
                鉴于对这些权利和自由的普遍了解对于这个誓愿的充分实现具有很大的重要性，
            </div>
            <a href="https://www.un.org/zh/about-us/universal-declaration-of-human-rights" class="link" target="_blank">
                阅读完整宣言
            </a>
        </div>
    </div>

    <script>
        const themeToggle = document.getElementById('themeToggle');

        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
            localStorage.setItem('theme', 
                document.body.classList.contains('dark') ? 'dark' : 'light'
            );
        });

        if (localStorage.getItem('theme') === 'dark' || 
            (!localStorage.getItem('theme') && 
             window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.body.classList.add('dark');
        }
    </script>
</body>
</html>
    `

    return new Response(html, { headers })
  }
}
