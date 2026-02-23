(function() {
    /* ADIÇÃO: Watchdog para evitar carregamento infinito */
    setTimeout(() => {
        const root = document.getElementById("scripta-root");
        if (root && root.innerHTML === "" && window.renderLogin) {
            console.warn("Firebase demorou a responder. Forçando carregamento...");
            window.renderLogin();
        }
    }, 4000);

    /* Adição: Correção de visibilidade e reset de fundo */
    const styleFix = document.createElement("style");
    styleFix.innerHTML = "#scripta-root:empty{background:radial-gradient(circle at center,#001a1f 0,#000 100%)!important; display:flex; align-items:center; justify-content:center} #scripta-root:empty::after{content:'Carregando Workspace...'; color:#00d2ff; font-weight:800; font-family:sans-serif; animation:pulse 1.5s infinite} @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}";
    document.head.appendChild(styleFix);

    const e = document.createElement("style");
    e.innerHTML = "@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;800&display=swap');#scripta-root{position:fixed!important;top:0;left:0;width:100vw;height:100vh;background:#000!important;color:#fff!important;z-index:2147483647;font-family:'Plus Jakarta Sans',sans-serif;overflow-x:hidden;overflow-y:auto;scroll-behavior:smooth}.bg-mesh{position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(at 0% 0%,rgba(0,210,255,0.08) 0,transparent 50%),radial-gradient(at 100% 100%,rgba(0,210,255,0.08) 0,transparent 50%);pointer-events:none;z-index:-1}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}.login-page{height:100vh;display:flex;align-items:center;justify-content:center;background:radial-gradient(circle at center,#001a1f 0,#000 100%);animation:fadeIn .8s ease;padding:20px}.login-card{background:rgba(10,10,10,0.6);border:1px solid rgba(255,255,255,0.1);padding:45px;border-radius:32px;width:100%;max-width:420px;text-align:center;backdrop-filter:blur(20px);box-shadow:0 25px 50px rgba(0,0,0,0.5);animation:fadeInUp .6s cubic-bezier(0.23,1,0.32,1)}@media(max-width:480px){.login-card{padding:30px 20px}}.navbar{display:flex;justify-content:space-between;align-items:center;padding:15px 6%;background:rgba(0,0,0,0.7);border-bottom:1px solid rgba(255,255,255,0.05);position:sticky;top:0;z-index:100;backdrop-filter:blur(15px)}@media(max-width:600px){.navbar{padding:15px 4%}.navbar div:first-child{font-size:20px!important}}.hero{text-align:center;padding:120px 6% 60px;animation:fadeIn 1s ease}@media(max-width:768px){.hero{padding:60px 4% 40px}.hero h1{font-size:38px!important;letter-spacing:-1px!important}}.profile-container{position:relative; max-width:600px;margin:40px auto;padding:40px;background:rgba(10,10,10,0.8);border:1px solid rgba(255,255,255,0.05);border-radius:32px;backdrop-filter:blur(20px);animation:fadeInUp .6s ease; overflow:hidden;}@media(max-width:600px){.profile-container{margin:20px;padding:25px}}.profile-avatar-editor{position:relative;width:120px;height:120px;margin:0 auto 30px;cursor:pointer;transition:.3s;z-index:2}.profile-avatar-editor img{width:100%;height:100%;border-radius:40px;object-fit:cover;border:2px solid #00d2ff}.decoration-frame{position:absolute;top:-16%;left:-16%;width:132%;height:132%;pointer-events:none;z-index:3; object-fit:contain;}.edit-overlay{position:absolute;bottom:-5px;right:-5px;background:#00d2ff;color:#000;padding:8px;border-radius:12px;display:flex;align-items:center;justify-content:center}.home-stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:20px;margin:60px 0;padding:0 6%}@media(max-width:768px){.home-stats{grid-template-columns:1fr;margin:30px 0}}.stat-box{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);padding:35px;border-radius:28px;text-align:center;transition:.4s;animation:fadeInUp .8s ease backwards}.stat-box:hover{border-color:#00d2ff;background:rgba(0,210,255,0.05);transform:translateY(-5px)}.counter{font-size:38px;font-weight:800;color:#00d2ff;display:block;margin-bottom:5px}.btn-cyan{background:#00d2ff;color:#000;border:none;padding:16px 32px;border-radius:16px;font-weight:800;cursor:pointer;transition:.3s;display:inline-flex;align-items:center;gap:10px}.btn-cyan:hover{background:#fff;transform:scale(1.03);box-shadow:0 0 25px rgba(0,210,255,0.4)}.input-field{width:100%;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);padding:16px;color:#fff;border-radius:14px;outline:0;transition:.3s}.input-field:focus{border-color:#00d2ff;background:rgba(255,255,255,0.07)}.market-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:25px;margin-top:40px}@media(max-width:600px){.market-grid{grid-template-columns:1fr;padding:0 4%!important}}.code-card{background:#0a0a0a;border:1px solid #1a1a1a;padding:25px;border-radius:24px;cursor:pointer;transition:.4s}.code-card:hover{border-color:#00d2ff;transform:translateY(-8px)}.mod-float-btn{position:fixed;bottom:20px;right:20px;width:55px;height:55px;background:#00d2ff;color:#000;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 10px 30px rgba(0,210,255,0.4);z-index:999999;animation:float 3s ease-in-out infinite;border:3px solid #000}.seller-float-btn{position:fixed;bottom:20px;right:85px;width:55px;height:55px;background:#ffb800;color:#000;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 10px 30px rgba(255,184,0,0.4);z-index:999999;animation:float 3.5s ease-in-out infinite;border:3px solid #000}.user-row{display:flex;justify-content:space-between;align-items:center;background:rgba(255,255,255,0.03);padding:15px 25px;border-radius:16px;margin-bottom:12px;border:1px solid rgba(255,255,255,0.05)}@media(max-width:768px){.user-row{flex-direction:column;align-items:flex-start;gap:15px;padding:15px}.user-row div:last-child{width:100%;justify-content:space-between}} /* MODAL BAN STYLE */ .modal-overlay{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:9999999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(5px)}.modal-box{background:#111;border:1px solid #333;padding:30px;border-radius:24px;width:90%;max-width:400px;text-align:center;box-shadow:0 20px 50px rgba(0,0,0,0.8)} .func-grid-card{background:rgba(255,255,255,0.02); border:1px solid rgba(255,255,255,0.05); padding:30px; border-radius:24px; text-align:center; cursor:pointer; transition:.3s} .func-grid-card:hover{border-color:#00d2ff; background:rgba(0,210,255,0.05); transform:scale(1.02)} .plan-card{background:linear-gradient(145deg, #0a0a0a, #111); border:1px solid #333; padding:40px; border-radius:32px; text-align:center; position:relative; overflow:hidden} .plan-card.maker{border-color:#ffb800; box-shadow:0 0 30px rgba(255,184,0,0.1)} .maker-badge{position:absolute; top:20px; right:20px; background:#ffb800; color:#000; font-weight:800; font-size:10px; padding:4px 10px; border-radius:100px} .profile-banner-bg{position:absolute; top:0; left:0; width:100%; height:150px; object-fit:cover; opacity:0.6; mask-image: linear-gradient(to bottom, black, transparent); z-index:0}";
    document.head.appendChild(e);
    const t = document.createElement("div");
    t.id = "scripta-root";
    document.body.appendChild(t);
    const o = ["https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js", "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js", "https://unpkg.com/lucide@latest"];
    let n = 0;
    o.forEach(e => {
        const t = document.createElement("script");
        t.src = e, t.onload = () => {
            if (++n === o.length) r()
        }, document.head.appendChild(t)
    });

    function r() {
        const e = {
            apiKey: "AIzaSyB3Pfq6163gp3Wy3zyClpxNiDN03Gp3ENc",
            authDomain: "scripta-ef577.firebaseapp.com",
            projectId: "scripta-ef577",
            appId: "1:99392883377:web:294f4e0005be5eefb6f090"
        };
        firebase.apps.length || firebase.initializeApp(e);
        const o = firebase.auth(),
            n = "trackscommunity7@gmail.com";
        let r = JSON.parse(localStorage.getItem('approved_products')) || [{
            id: 1,
            name: "Checkout Transparente",
            price: "R$ 149,90",
            category: "Códigos",
            icon: "credit-card",
            desc: "Integração direta com Gateways de pagamento."
        }, {
            id: 2,
            name: "Landing Page High-Level",
            price: "R$ 299,00",
            category: "Sites",
            icon: "zap",
            desc: "Aumente sua conversão em até 40%."
        }, {
            id: 3,
            name: "Bot WhatsApp V3",
            price: "R$ 87,00",
            category: "Plugins",
            icon: "message-circle",
            desc: "Automação inteligente de leads."
        }];
        
        /* ADIÇÃO: Itens da loja de decorações */
        let shopDecorations = JSON.parse(localStorage.getItem('shop_decorations')) || [
            {id: 'frame_neon', name: 'Neon Cyber', price: 150, image: 'https://cdn.discordapp.com/attachments/1107784384950386708/1167484395637985351/neon_frame.png'},
            {id: 'frame_fire', name: 'Chamas Elite', price: 300, image: 'https://cdn.discordapp.com/attachments/1107784384950386708/1167484396015472710/fire_frame.png'}
        ];

        const a = e => {
            const t = {
                nickname: "Novo Dev",
                bio: "Explorando a DevMaker...",
                photo: "https://api.dicebear.com/7.x/bottts/svg?seed=dev",
                role: "Membro",
                email: "Não registrado",
                /* Adição de campos para personalização */
                plan: null, // {type: 'Maker', expires: timestamp}
                decorations: [], // Array de IDs
                equipped_decoration: null,
                banner_anim: null
            };
            const o = localStorage.getItem(`profile_${e}`);
            return o ? { ...t, ...JSON.parse(o) } : t // Merge para garantir novos campos
        };

        function i(e, t, o, n, r = "") {
            let a = null;
            const i = s => {
                a || (a = s);
                const l = Math.min((s - a) / n, 1);
                e.innerHTML = Math.floor(l * (o - t) + t) + r, l < 1 && window.requestAnimationFrame(i)
            };
            window.requestAnimationFrame(i)
        }
        window.renderLogin = () => {
            t.innerHTML = `<div class="login-page"><div class="login-card"><div style="background: rgba(0, 210, 255, 0.1); width: 60px; height: 60px; border-radius: 20px; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: #00d2ff"><i data-lucide="code-2" size="32"></i></div><h2 style="font-size:32px; font-weight:800; color:#fff; letter-spacing:-1px">DevMaker<span style="color:#00d2ff">.</span></h2><p style="color:#666; margin: 10px 0 30px; font-size:15px">Entre para a elite do desenvolvimento</p><div style="text-align:left"><label style="font-size:12px; color:#444; font-weight:bold; margin-left:5px">E-MAIL</label><input type="email" id="l_email" class="input-field" placeholder="exemplo@dev.com" style="margin-bottom:15px"><label style="font-size:12px; color:#444; font-weight:bold; margin-left:5px">SENHA</label><input type="password" id="l_pass" class="input-field" placeholder="••••••••"></div><button class="btn-cyan" style="width:100%; margin-top:30px; justify-content:center" onclick="window.handleAuth('login')">Acessar Workspace</button><div style="margin-top:25px; font-size:14px; color:#444">Novo por aqui? <span style="color:#00d2ff; cursor:pointer; font-weight:bold" onclick="window.handleAuth('register')">Criar Conta Grátis</span></div></div></div>`, lucide.createIcons()
        }, window.renderHome = e => {
            /* CHECAGEM DE BANIMENTO */
            const bannedInfo = localStorage.getItem(`banned_${e.uid}`);
            if (bannedInfo) {
                const ban = JSON.parse(bannedInfo);
                const now = Date.now();
                if (ban.type === 'perm' || ban.until > now) {
                    const msg = ban.type === 'perm' ? "BANIDO PERMANENTEMENTE" : `BANIDO ATÉ: ${new Date(ban.until).toLocaleString()}`;
                    t.innerHTML = `<div class="login-page"><div class="login-card" style="border-color:#ff4444"><div style="color:#ff4444; margin-bottom:20px"><i data-lucide="ban" size="50"></i></div><h2 style="color:#ff4444; margin-bottom:10px">ACESSO NEGADO</h2><p style="color:#fff; font-weight:bold">${msg}</p><button class="btn-cyan" style="background:#333; color:#fff; margin-top:30px" onclick="firebase.auth().signOut()">Sair</button></div></div>`;
                    lucide.createIcons();
                    return;
                } else {
                    localStorage.removeItem(`banned_${e.uid}`); // Ban expirou
                }
            }

            /* Atualiza e-mail no perfil */
            let currentProfile = a(e.uid);
            currentProfile.email = e.email;
            localStorage.setItem(`profile_${e.uid}`, JSON.stringify(currentProfile));

            const r = currentProfile,
                l = e.email === n,
                s = r.role === "Vendedor";
            
            // Renderiza Home
            t.innerHTML = `<div class="bg-mesh"></div><nav class="navbar"><div style="font-weight:800; color:#fff; font-size:24px; letter-spacing:-1.5px">DevMaker<span style="color:#00d2ff">.</span></div><div style="display:flex; align-items:center; gap:10px"><div onclick="window.renderProfile()" style="display:flex; align-items:center; gap:8px; cursor:pointer; background:rgba(255,255,255,0.05); padding:6px 12px; border-radius:100px; border:1px solid rgba(255,255,255,0.1)"><img src="${r.photo}" style="width:24px; height:24px; border-radius:6px; object-fit:cover"><span style="font-size:12px; font-weight:bold; color:#fff; display:flex; align-items:center; gap:4px">${r.nickname.split(' ')[0]} ${l?'<i data-lucide="shield-check" size="12" style="color:#00d2ff"></i>':""} ${s?'<i data-lucide="shopping-bag" size="12" style="color:#ffb800"></i>':""}</span></div><button onclick="firebase.auth().signOut()" style="background:rgba(255,68,68,0.1); border:none; color:#ff4444; padding:8px; border-radius:12px; cursor:pointer"><i data-lucide="log-out" size="18"></i></button></div></nav><div class="container"><div class="hero"><div style="background: rgba(0, 210, 255, 0.1); color: #00d2ff; padding: 8px 16px; border-radius: 100px; display: inline-flex; align-items: center; gap: 8px; margin-bottom: 25px; font-size: 13px; font-weight: bold"><span style="width: 8px; height: 8px; background: #00d2ff; border-radius: 50%; display: inline-block"></span> V1.0 DISPONÍVEL</div><h1>Construa o Futuro com <br><span style="color:#00d2ff">Código de Elite</span></h1><p style="padding:0 10%; font-size:15px; color:#888">A DevMaker fornece os componentes e scripts que você precisa para dominar o mercado.</p><button class="btn-cyan" onclick="window.renderFunctions()">Acessar Funções <i data-lucide="grid-3x3" size="18"></i></button></div><div class="home-stats"><div class="stat-box"><span class="counter" id="count-scripts">0</span><p style="color:#555; font-size:14px; font-weight:600">Scripts Validados</p></div><div class="stat-box" style="animation-delay: 0.1s"><span class="counter" id="count-users">0</span><p style="color:#555; font-size:14px; font-weight:600">Desenvolvedores</p></div><div class="stat-box" style="animation-delay: 0.2s"><span class="counter" id="count-uptime">0</span><p style="color:#555; font-size:14px; font-weight:600">Uptime Garantido</p></div></div></div>${l?'<div class="mod-float-btn" onclick="window.renderModPanel()"><i data-lucide="shield-alert"></i></div>':""} ${s?'<div class="seller-float-btn" onclick="window.renderSellerPanel()"><i data-lucide="briefcase"></i></div>':""}`, lucide.createIcons(), setTimeout(() => {
                i(document.getElementById("count-scripts"), 0, 1250, 2e3, "+"), i(document.getElementById("count-users"), 0, 850, 2e3, "+"), i(document.getElementById("count-uptime"), 0, 100, 2e3, "%")
            }, 500)
        },
        /* NOVA PÁGINA DE FUNÇÕES */
        window.renderFunctions = () => {
             t.innerHTML = `<div class="bg-mesh"></div><nav class="navbar"><button onclick="window.renderHome(firebase.auth().currentUser)" style="background:none; border:none; color:#555; cursor:pointer; font-weight:bold; display:flex; align-items:center; gap:8px"><i data-lucide="arrow-left"></i> Home</button><div style="font-weight:800; color:#fff">Funções</div></nav><div class="container" style="padding: 40px 6%"><h2 style="font-size:28px; font-weight:800; margin-bottom:10px; text-align:center">Central de Recursos</h2><p style="color:#666; text-align:center; margin-bottom:40px">Selecione onde deseja ir</p><div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:20px"><div class="func-grid-card" onclick="window.renderMarket('Todos')"><div style="background:rgba(0,210,255,0.1); width:60px; height:60px; border-radius:18px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:#00d2ff"><i data-lucide="shopping-cart" size="30"></i></div><h3 style="color:#fff; font-size:20px; font-weight:800">Marketplace</h3><p style="color:#666; font-size:13px; margin-top:8px">Compre scripts e códigos de alta qualidade.</p></div><div class="func-grid-card" onclick="window.renderPlans()"><div style="background:rgba(255,184,0,0.1); width:60px; height:60px; border-radius:18px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:#ffb800"><i data-lucide="crown" size="30"></i></div><h3 style="color:#fff; font-size:20px; font-weight:800">Planos VIP</h3><p style="color:#666; font-size:13px; margin-top:8px">Torne-se Maker e desbloqueie personalizações.</p></div><div class="func-grid-card" onclick="window.renderShop()"><div style="background:rgba(255,100,255,0.1); width:60px; height:60px; border-radius:18px; display:flex; align-items:center; justify-content:center; margin:0 auto 20px; color:#ff64ff"><i data-lucide="gem" size="30"></i></div><h3 style="color:#fff; font-size:20px; font-weight:800">Loja de Decorações</h3><p style="color:#666; font-size:13px; margin-top:8px">Molduras exclusivas para destacar seu perfil.</p></div></div></div>`, lucide.createIcons();
        },
        /* NOVA PÁGINA DE PLANOS (MAKER) */
        window.renderPlans = () => {
             const user = o.currentUser;
             const profile = a(user.uid);
             const isMaker = profile.plan && profile.plan.name === 'Maker' && profile.plan.expires > Date.now();
             
             t.innerHTML = `<div class="bg-mesh"></div><nav class="navbar"><button onclick="window.renderFunctions()" style="background:none; border:none; color:#555; cursor:pointer; font-weight:bold; display:flex; align-items:center; gap:8px"><i data-lucide="arrow-left"></i> Voltar</button><div style="font-weight:800; color:#ffb800">Planos</div></nav><div class="container" style="padding: 40px 6%; max-width:800px; margin:0 auto"><div class="plan-card maker"><div class="maker-badge">MAIS POPULAR</div><i data-lucide="zap" size="50" style="color:#ffb800; margin-bottom:20px"></i><h2 style="font-size:36px; font-weight:800; color:#fff">Plano Maker <i data-lucide="check-circle-2" style="fill:#ffb800; color:#000; width:24px"></i></h2><p style="color:#888; font-size:16px; margin-bottom:30px">A chave para a personalização suprema.</p><div style="font-size:42px; font-weight:800; color:#ffb800; margin-bottom:10px">R$ 29,90<span style="font-size:14px; color:#666; font-weight:600"> /mês</span></div>${isMaker ? `<button class="btn-cyan" style="background:#222; color:#fff; cursor:default">VOCÊ JÁ É MAKER</button><p style="color:#444; font-size:12px; margin-top:10px">Expira em: ${new Date(profile.plan.expires).toLocaleDateString()}</p>` : `<button class="btn-cyan" style="background:#ffb800; color:#000; box-shadow:0 0 20px rgba(255,184,0,0.3)" onclick="window.buyMakerPlan()">ASSINAR AGORA</button>`}</div><div style="margin-top:50px"><h3 style="font-weight:800; margin-bottom:20px; display:flex; align-items:center; gap:10px"><i data-lucide="info" size="20" style="color:#ffb800"></i> Benefícios Exclusivos</h3><div style="display:grid; grid-template-columns:1fr 1fr; gap:20px"><div style="background:rgba(255,255,255,0.03); padding:20px; border-radius:16px; display:flex; align-items:center; gap:15px"><div style="background:#111; padding:10px; border-radius:10px; color:#ffb800"><i data-lucide="image-plus"></i></div><div><div style="font-weight:bold; font-size:14px">Banner Animado</div><div style="font-size:12px; color:#666">Coloque GIFs no fundo do perfil.</div></div></div><div style="background:rgba(255,255,255,0.03); padding:20px; border-radius:16px; display:flex; align-items:center; gap:15px"><div style="background:#111; padding:10px; border-radius:10px; color:#ffb800"><i data-lucide="star"></i></div><div><div style="font-weight:bold; font-size:14px">Ícone Exclusivo</div><div style="font-size:12px; color:#666">Destaque seu nome no chat e perfil.</div></div></div></div></div></div>`, lucide.createIcons();
        },
        window.buyMakerPlan = () => {
            if(confirm("Deseja simular a compra do Plano Maker por R$ 29,90?")) {
                const user = o.currentUser;
                let profile = a(user.uid);
                profile.plan = {
                    name: "Maker",
                    expires: Date.now() + (30 * 24 * 60 * 60 * 1000) // 30 dias
                };
                localStorage.setItem(`profile_${user.uid}`, JSON.stringify(profile));
                alert("Parabéns! Você agora é um Maker.");
                window.renderPlans();
            }
        },
        /* NOVA LOJA DE DECORAÇÕES */
        window.renderShop = () => {
             const user = o.currentUser;
             const profile = a(user.uid);
             // Busca itens da loja (definidos no inicio ou localStorage)
             shopDecorations = JSON.parse(localStorage.getItem('shop_decorations')) || shopDecorations;
             
             t.innerHTML = `<div class="bg-mesh"></div><nav class="navbar"><button onclick="window.renderFunctions()" style="background:none; border:none; color:#555; cursor:pointer; font-weight:bold; display:flex; align-items:center; gap:8px"><i data-lucide="arrow-left"></i> Voltar</button><div style="font-weight:800; color:#ff64ff">Loja de Decorações</div></nav><div class="container" style="padding: 30px 6%"><div class="market-grid">${shopDecorations.map(item => {
                 const owned = profile.decorations && profile.decorations.includes(item.id);
                 const equipped = profile.equipped_decoration === item.id;
                 return `<div class="code-card" style="text-align:center; padding:30px 20px; position:relative; overflow:hidden"><div style="width:80px; height:80px; margin:0 auto 20px; position:relative"><img src="${profile.photo}" style="width:100%; height:100%; border-radius:26px; object-fit:cover; opacity:0.5"><img src="${item.image}" style="position:absolute; top:-16%; left:-16%; width:132%; height:132%; object-fit:contain"></div><h3 style="font-size:18px; font-weight:800; margin-bottom:5px">${item.name}</h3><p style="font-size:14px; color:#ff64ff; font-weight:bold; margin-bottom:20px">💎 ${item.price}</p>${owned ? (equipped ? `<button class="btn-cyan" style="width:100%; background:#222; color:#555; cursor:default">EM USO</button>` : `<button class="btn-cyan" style="width:100%; background:#fff; color:#000" onclick="window.equipDecoration('${item.id}')">EQUIPAR</button>`) : `<button class="btn-cyan" style="width:100%; background:#ff64ff; color:#000; box-shadow:0 0 20px rgba(255,100,255,0.3)" onclick="window.buyDecoration('${item.id}', ${item.price})">COMPRAR</button>`}</div>`
             }).join('')}</div></div>`, lucide.createIcons();
        },
        window.buyDecoration = (id, price) => {
            if(confirm(`Comprar esta decoração por ${price} Diamantes (Simulado)?`)) {
                const user = o.currentUser;
                let profile = a(user.uid);
                if(!profile.decorations) profile.decorations = [];
                profile.decorations.push(id);
                localStorage.setItem(`profile_${user.uid}`, JSON.stringify(profile));
                alert("Compra realizada com sucesso!");
                window.renderShop();
            }
        },
        window.equipDecoration = (id) => {
             const user = o.currentUser;
             let profile = a(user.uid);
             // Se clicar no que já está equipado, desequipa (opcional, aqui apenas troca)
             profile.equipped_decoration = id;
             localStorage.setItem(`profile_${user.uid}`, JSON.stringify(profile));
             alert("Decoração equipada!");
             window.renderShop(); // Recarrega para atualizar botões
        },
        
        window.renderSellerPanel = () => {
            t.innerHTML = `<div class="bg-mesh"></div><nav class="navbar"><button onclick="window.renderHome(firebase.auth().currentUser)" style="background:none; border:none; color:#555; cursor:pointer; font-weight:bold; display:flex; align-items:center; gap:8px"><i data-lucide="chevron-left"></i> Voltar</button><div style="font-weight:800; color:#ffb800">Painel Vendedor</div></nav><div class="container" style="padding: 40px 6%"><h2 style="font-size:28px; font-weight:800; margin-bottom:10px">Publicar Novo Produto</h2><div class="profile-container" style="margin:20px 0; max-width:100%"><div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap:20px"><div onclick="document.getElementById('p_banner').click()" style="background:#111; border:2px dashed #333; height:180px; border-radius:20px; display:flex; flex-direction:column; align-items:center; justify-content:center; cursor:pointer"><img id="banner_preview" style="display:none; width:100%; height:100%; border-radius:18px; object-fit:cover"><div id="banner_placeholder" style="text-align:center; color:#555"><i data-lucide="image" size="30"></i><p style="font-size:12px; margin-top:10px">Banner do Produto (Galeria)</p></div><input type="file" id="p_banner" hidden accept="image/*" onchange="window.previewBanner(this)"></div><div><label style="font-size:12px; color:#555; font-weight:bold">NOME DO PRODUTO</label><input type="text" id="p_name" class="input-field" placeholder="Ex: Bot WhatsApp V4" style="margin:8px 0 15px"><label style="font-size:12px; color:#555; font-weight:bold">PREÇO (R$)</label><input type="text" id="p_price" class="input-field" placeholder="0,00" style="margin:8px 0 15px"></div></div><div style="margin-top:20px"><label style="font-size:12px; color:#555; font-weight:bold">CATEGORIA</label><select id="p_category" class="input-field" style="margin:8px 0 15px; appearance:none"><option value="Códigos">Códigos</option><option value="Sites">Sites</option><option value="Plugins">Plugins</option></select><label style="font-size:12px; color:#555; font-weight:bold">DESCRIÇÃO</label><textarea id="p_desc" class="input-field" style="height:80px; resize:none; margin:8px 0 15px" placeholder="Descreva os benefícios..."></textarea><div onclick="document.getElementById('p_stock').click()" style="background:rgba(0,210,255,0.05); border:1px solid #00d2ff; padding:15px; border-radius:14px; text-align:center; cursor:pointer; color:#00d2ff; font-weight:bold"><i data-lucide="file-archive" size="18"></i> <span id="stock_label">CARREGAR ESTOQUE (ZIP/RAR)</span><input type="file" id="p_stock" hidden onchange="document.getElementById('stock_label').innerText = this.files[0].name"></div><button class="btn-cyan" style="width:100%; margin-top:30px; justify-content:center" onclick="window.submitProduct()">Enviar para Moderação</button></div></div></div>`, lucide.createIcons()
        }, window.previewBanner = e => {
            if (e.files[0]) {
                const t = new FileReader;
                t.onload = e => {
                    document.getElementById("banner_preview").src = e.target.result, document.getElementById("banner_preview").style.display = "block", document.getElementById("banner_placeholder").style.display = "none"
                }, t.readAsDataURL(e.files[0])
            }
        }, window.submitProduct = () => {
            const e = {
                id: Date.now(),
                name: document.getElementById("p_name").value,
                price: "R$ " + document.getElementById("p_price").value,
                category: document.getElementById("p_category").value,
                desc: document.getElementById("p_desc").value,
                banner: document.getElementById("banner_preview").src,
                stock: document.getElementById("p_stock").files[0] ?.name,
                seller: o.currentUser.email
            };
            if (!e.name || !e.price || !e.stock) return alert("Preencha todos os campos e anexe o estoque!");
            let t = JSON.parse(localStorage.getItem('pending_products')) || [];
            t.push(e), localStorage.setItem('pending_products', JSON.stringify(t)), alert("Produto enviado! Aguarde a aprovação do moderador."), window.renderHome(o.currentUser)
        }, window.renderModPanel = () => {
            const e = o.currentUser;
            let r = JSON.parse(localStorage.getItem('pending_products')) || [];

            /* LÓGICA DE BUSCAR TODOS OS USUÁRIOS */
            let allUsers = [];
            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                if (key.startsWith("profile_")) {
                    const uid = key.replace("profile_", "");
                    const uData = JSON.parse(localStorage.getItem(key));
                    allUsers.push({
                        uid: uid,
                        ...uData
                    });
                }
            }

            t.innerHTML = `<div class="bg-mesh"></div><nav class="navbar"><button onclick="window.renderHome(firebase.auth().currentUser)" style="background:none; border:none; color:#555; cursor:pointer; font-weight:bold; display:flex; align-items:center; gap:8px"><i data-lucide="chevron-left"></i> Sair</button><div style="font-weight:800; color:#fff">Painel ADM</div></nav><div class="container" style="padding: 30px 6%"><h2 style="font-size:28px; font-weight:800; margin-bottom:10px">Produtos Pendentes (${r.length})</h2><div id="pending-list" style="margin-bottom:50px">${r.map(e=>`<div class="user-row" style="flex-direction:column; align-items:flex-start; gap:15px"><div style="display:flex; gap:15px; width:100%"><img src="${e.banner}" style="width:80px; height:80px; border-radius:12px; object-fit:cover; background:#111"><div><div style="font-weight:800; color:#fff; font-size:18px">${e.name} <span style="color:#00d2ff; font-size:12px">(${e.category})</span></div><div style="color:#ffb800; font-weight:bold">${e.price}</div><div style="font-size:12px; color:#555">Vendedor: ${e.seller}</div><div style="font-size:12px; color:#00d2ff">Arquivo: ${e.stock}</div></div></div><p style="color:#888; font-size:13px">${e.desc}</p><div style="display:flex; gap:10px; width:100%"><button class="btn-cyan" style="flex:1; justify-content:center" onclick="window.approveProduct(${e.id})">APROVAR</button><button style="flex:1; background:rgba(255,0,0,0.1); border:1px solid #ff4444; color:#ff4444; border-radius:12px; font-weight:bold" onclick="window.rejectProduct(${e.id})">RECUSAR</button></div></div>`).join("")||"<p style='color:#444'>Nenhum produto aguardando...</p>"}</div>
            
            <h2 style="font-size:28px; font-weight:800; margin-bottom:10px">Adicionar Decoração à Loja</h2>
            <div class="profile-container" style="margin:0 0 40px; max-width:100%">
                <div style="display:flex; gap:10px; flex-wrap:wrap">
                    <input id="new-dec-name" class="input-field" placeholder="Nome da Decoração" style="flex:1">
                    <input id="new-dec-price" class="input-field" placeholder="Preço" style="width:100px">
                </div>
                <input id="new-dec-img" class="input-field" placeholder="URL da Imagem (PNG transparente)" style="margin-top:10px">
                <button class="btn-cyan" style="width:100%; margin-top:15px; justify-content:center; background:#ff64ff; color:#000" onclick="window.addShopItem()">ADICIONAR À LOJA</button>
            </div>

            <h2 style="font-size:28px; font-weight:800; margin-bottom:10px">Usuários (${allUsers.length})</h2><input type="text" id="mod-search" class="input-field" placeholder="🔍 Buscar por e-mail..." style="margin-bottom:20px" oninput="window.filterUsers(this.value)"><div id="users-list">${allUsers.map(u => `<div class="user-row"><div style="display:flex; align-items:center; gap:12px"><img src="${u.photo}" style="width:40px; height:40px; border-radius:10px; background:#111"><div><div style="font-weight:bold; color:#fff; font-size:14px" class="u-email">${u.email || 'Email Oculto/Desconhecido'}</div><div style="font-size:11px; color:#444">Cargo Atual: <b>${u.role}</b></div></div></div><div style="display:flex; gap:8px"><button class="btn-cyan" style="padding:8px 12px; font-size:11px; background:${u.role==='Vendedor'?'#ff4444':'#ffb800'}; color:#000" onclick="window.toggleRole('${u.uid}','Vendedor')">${u.role==='Vendedor'?'REMOVER VEND.':'TORNAR VEND.'}</button><button style="background:#330000; border:1px solid #500; color:#f55; padding:8px 12px; border-radius:12px; font-size:11px; font-weight:bold; cursor:pointer" onclick="window.openBanMenu('${u.uid}')">BANIR</button></div></div>`).join('')}</div></div>`;
            lucide.createIcons()
        },
        window.addShopItem = () => {
            const name = document.getElementById('new-dec-name').value;
            const price = document.getElementById('new-dec-price').value;
            const img = document.getElementById('new-dec-img').value;
            
            if(!name || !price || !img) return alert("Preencha tudo!");
            
            let shop = JSON.parse(localStorage.getItem('shop_decorations')) || shopDecorations;
            shop.push({ id: 'dec_'+Date.now(), name, price, image: img });
            localStorage.setItem('shop_decorations', JSON.stringify(shop));
            shopDecorations = shop; // Atualiza variavel local
            alert("Decoração adicionada!");
            window.renderModPanel();
        },
        /* FUNÇÕES DE BANIMENTO E MODAL */
        window.openBanMenu = (uid) => {
            const modal = document.createElement('div');
            modal.id = 'ban-modal-container';
            modal.className = 'modal-overlay';
            modal.innerHTML = `<div class="modal-box"><h3 style="color:#fff; font-size:20px; margin-bottom:20px">Banir Usuário</h3><p style="color:#888; font-size:13px; margin-bottom:15px">Selecione a duração do banimento:</p><select id="ban-duration" class="input-field" style="margin-bottom:20px"><option value="10m">10 Minutos</option><option value="1h">1 Hora</option><option value="1d">1 Dia</option><option value="1w">1 Semana</option><option value="1M">1 Mês</option><option value="1y">1 Ano</option><option value="perm" style="color:#ff4444; font-weight:bold">PERMANENTE</option></select><div style="display:flex; gap:10px"><button class="btn-cyan" style="flex:1; justify-content:center; background:#ff4444; color:#fff" onclick="window.applyBan('${uid}')">CONFIRMAR BAN</button><button class="btn-cyan" style="flex:1; justify-content:center; background:#333; color:#fff" onclick="document.getElementById('ban-modal-container').remove()">CANCELAR</button></div></div>`;
            document.body.appendChild(modal);
        },
        window.applyBan = (uid) => {
            const duration = document.getElementById('ban-duration').value;
            let timeToAdd = 0;
            let isPerm = false;
            
            if(duration === 'perm') isPerm = true;
            else if(duration === '10m') timeToAdd = 10 * 60 * 1000;
            else if(duration === '1h') timeToAdd = 60 * 60 * 1000;
            else if(duration === '1d') timeToAdd = 24 * 60 * 60 * 1000;
            else if(duration === '1w') timeToAdd = 7 * 24 * 60 * 60 * 1000;
            else if(duration === '1M') timeToAdd = 30 * 24 * 60 * 60 * 1000;
            else if(duration === '1y') timeToAdd = 365 * 24 * 60 * 60 * 1000;

            const banData = {
                type: duration,
                until: Date.now() + timeToAdd,
                timestamp: Date.now()
            };
            
            localStorage.setItem(`banned_${uid}`, JSON.stringify(banData));
            alert("Usuário banido com sucesso!");
            document.getElementById('ban-modal-container').remove();
            
            // Força reload se for o próprio usuário (teste) ou apenas atualiza painel
            window.renderModPanel();
        },
        window.approveProduct = e => {
            let t = JSON.parse(localStorage.getItem('pending_products')) || [],
                o = t.find(t => t.id === e);
            if (o) {
                let n = JSON.parse(localStorage.getItem('approved_products')) || [];
                o.icon = "package", n.push(o), localStorage.setItem('approved_products', JSON.stringify(n)), window.rejectProduct(e), alert("Produto aprovado e enviado ao Marketplace!")
            }
        }, window.rejectProduct = e => {
            let t = JSON.parse(localStorage.getItem('pending_products')) || [];
            t = t.filter(t => t.id !== e), localStorage.setItem('pending_products', JSON.stringify(t)), window.renderModPanel()
        }, window.filterUsers = e => {
            document.querySelectorAll(".user-row").forEach(t => {
                const emailEl = t.querySelector(".u-email");
                if (emailEl) emailEl.innerText.toLowerCase().includes(e.toLowerCase()) ? t.style.display = "flex" : t.style.display = "none"
            })
        }, window.toggleRole = (e, t) => {
            const o = JSON.parse(localStorage.getItem(`profile_${e}`)) || {
                nickname: "Novo Dev",
                bio: "...",
                photo: "https://api.dicebear.com/7.x/bottts/svg?seed=dev",
                role: "Membro"
            };
            o.role = (o.role === t) ? "Membro" : t;
            localStorage.setItem(`profile_${e}`, JSON.stringify(o));
            alert(`Cargo atualizado!`);
            window.renderModPanel()
        }, window.renderProfile = () => {
            const e = o.currentUser,
                r = a(e.uid),
                l = e.email === n;
            
            // Lógica para decoração equipada
            let decorationImg = "";
            if (r.equipped_decoration) {
                shopDecorations = JSON.parse(localStorage.getItem('shop_decorations')) || shopDecorations;
                const decItem = shopDecorations.find(d => d.id === r.equipped_decoration);
                if(decItem) decorationImg = decItem.image;
            }

            // Lógica para plano Maker
            const isMaker = r.plan && r.plan.name === 'Maker' && r.plan.expires > Date.now();

            t.innerHTML = `<div class="bg-mesh"></div><nav class="navbar"><button onclick="window.renderHome(firebase.auth().currentUser)" style="background:none; border:none; color:#555; cursor:pointer; font-weight:bold; display:flex; align-items:center; gap:8px"><i data-lucide="chevron-left"></i> Voltar</button><div style="font-weight:800; color:#fff">Perfil</div></nav>
            <div class="profile-container">
                ${r.banner_anim ? `<img src="${r.banner_anim}" class="profile-banner-bg">` : ''}
                <div style="position:relative; z-index:2">
                    <div class="profile-avatar-editor" onclick="document.getElementById('avatar-input').click()">
                        <img id="profile-img-preview" src="${r.photo}">
                        ${decorationImg ? `<img src="${decorationImg}" class="decoration-frame">` : ''}
                        <div class="edit-overlay"><i data-lucide="camera" size="16"></i></div>
                        <input type="file" id="avatar-input" style="display:none" accept="image/*" onchange="window.handleImageUpload(this)">
                    </div>
                    <div style="margin-bottom:20px"><label style="font-size:12px; color:#555; font-weight:bold">APELIDO ${isMaker ? '<span style="color:#ffb800; margin-left:5px"><i data-lucide="crown" size="12"></i> Maker</span>' : ''}</label><input type="text" id="p_nickname" class="input-field" value="${r.nickname}" style="margin-top:8px"></div>
                    <div style="margin-bottom:30px"><label style="font-size:12px; color:#555; font-weight:bold">BIO</label><textarea id="p_bio" class="input-field" style="height:100px; resize:none; margin-top:8px">${r.bio}</textarea></div>
                    ${isMaker ? `<div style="margin-bottom:30px"><label style="font-size:12px; color:#ffb800; font-weight:bold">BANNER ANIMADO (GIF URL)</label><input type="text" id="p_banner_anim" class="input-field" value="${r.banner_anim || ''}" placeholder="https://..." style="margin-top:8px; border-color:#ffb800"></div>` : ''}
                    <button class="btn-cyan" style="width:100%; justify-content:center" onclick="window.saveProfile()">Salvar</button>
                </div>
            </div>${l?'<div class="mod-float-btn" onclick="window.renderModPanel()"><i data-lucide="shield-alert"></i></div>':""}`, lucide.createIcons()
        }, window.handleImageUpload = e => {
            if (e.files && e.files[0]) {
                const t = new FileReader;
                t.onload = e => {
                    document.getElementById("profile-img-preview").src = e.target.result, window.tempPhoto = e.target.result
                }, t.readAsDataURL(e.files[0])
            }
        }, window.saveProfile = () => {
            const e = o.currentUser,
                existing = a(e.uid);
            
            const isMaker = existing.plan && existing.plan.name === 'Maker' && existing.plan.expires > Date.now();
            
            const t = {
                ...existing, // Mantém outros dados como decorações
                nickname: document.getElementById("p_nickname").value,
                bio: document.getElementById("p_bio").value,
                photo: window.tempPhoto || document.getElementById("profile-img-preview").src,
                banner_anim: isMaker && document.getElementById("p_banner_anim") ? document.getElementById("p_banner_anim").value : existing.banner_anim,
                email: e.email
            };
            localStorage.setItem(`profile_${e.uid}`, JSON.stringify(t)), alert("Perfil salvo!"), window.renderHome(e)
        }, window.renderMarket = (e = "Todos") => {
            const l = JSON.parse(localStorage.getItem('approved_products')) || r,
                s = "Todos" === e ? l : l.filter(t => t.category === e),
                c = o.currentUser,
                i = c.email === n;
            t.innerHTML = `<div class="bg-mesh"></div><nav class="navbar"><button onclick="window.renderFunctions()" style="background:none; border:none; color:#555; cursor:pointer; font-weight:bold; display:flex; align-items:center; gap:8px"><i data-lucide="arrow-left"></i> Voltar</button><div style="font-weight:800; color:#fff">Market</div></nav><div class="container" style="padding-top:20px"><div style="display:flex; gap:10px; margin: 0 6% 20px; overflow-x:auto; padding-bottom:10px">${["Todos","Códigos","Sites","Plugins"].map(t=>`<button class="category-tab ${e===t?"active":""}" style="border-radius:15px; border:1px solid #222; background:${e===t?"#00d2ff":"#0a0a0a"}; color:${e===t?"#000":"#fff"}; padding:8px 20px; cursor:pointer; font-weight:bold; white-space:nowrap" onclick="window.renderMarket('${t}')">${t}</button>`).join("")}</div><div class="market-grid" style="padding: 0 6%">${s.map((e,t)=>`<div class="code-card" onclick="window.renderProductPage(${e.id})"><div style="color:#00d2ff; background:rgba(0,210,255,0.05); width:40px; height:40px; border-radius:10px; display:flex; align-items:center; justify-content:center; margin-bottom:15px"><i data-lucide="${e.icon||'package'}" size="20"></i></div><h3 style="font-size:17px; font-weight:800">${e.name}</h3><p style="color:#444; font-size:13px; margin:8px 0">${e.desc}</p><div style="margin-top:15px; display:flex; justify-content:space-between; align-items:center; border-top:1px solid #111; padding-top:12px"><span style="font-weight:800; font-size:16px">${e.price}</span><span style="color:#00d2ff; font-size:11px; font-weight:bold">VER</span></div></div>`).join("")}</div></div>${i?'<div class="mod-float-btn" onclick="window.renderModPanel()"><i data-lucide="shield-alert"></i></div>':""}`, lucide.createIcons(), t.scrollTo(0, 0)
        }, window.renderProductPage = e => {
            const l = JSON.parse(localStorage.getItem('approved_products')) || r,
                s = l.find(t => t.id === e),
                c = o.currentUser,
                i = c.email === n;
            t.innerHTML = `<div class="bg-mesh"></div><nav class="navbar"><button onclick="window.renderMarket()" style="background:none; border:none; color:#555; cursor:pointer; display:flex; align-items:center; gap:8px"><i data-lucide="arrow-left"></i> Voltar</button></nav><div class="product-page" style="padding:30px 6%"><div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:30px"><div style="background:#0a0a0a; height:300px; border-radius:24px; border:1px solid #1a1a1a; display:flex; align-items:center; justify-content:center; overflow:hidden">${s.banner?`<img src="${s.banner}" style="width:100%; height:100%; object-fit:cover">`:`<i data-lucide="${s.icon||'package'}" size="80" style="color:#00d2ff"></i>`}</div><div><span style="background:rgba(0,210,255,0.1); color:#00d2ff; padding:5px 12px; border-radius:100px; font-size:11px; font-weight:800">${s.category}</span><h1 style="font-size:32px; font-weight:800; margin:15px 0">${s.name}</h1><p style="color:#888; font-size:15px">${s.desc}</p><div style="margin:25px 0; padding:20px; background:rgba(255,255,255,0.02); border-radius:20px; border:1px solid #1a1a1a"><div style="font-size:28px; font-weight:800">${s.price}</div><button class="btn-cyan" style="width:100%; margin-top:20px; justify-content:center" onclick="alert('Adquirindo...')">Adquirir</button></div></div></div></div>${i?'<div class="mod-float-btn" onclick="window.renderModPanel()"><i data-lucide="shield-alert"></i></div>':""}`, lucide.createIcons(), t.scrollTo(0, 0)
        }, window.handleAuth = e => {
            const t = document.getElementById("l_email").value,
                n = document.getElementById("l_pass").value;
            t && n ? ("login" === e ? o.signInWithEmailAndPassword(t, n) : o.createUserWithEmailAndPassword(t, n)).catch(e => alert(e.message)) : alert("Preencha os campos.")
        }, o.onAuthStateChanged(e => {
            e ? window.renderHome(e) : window.renderLogin()
        })
    }
})();
