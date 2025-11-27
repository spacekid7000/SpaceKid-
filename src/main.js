import './style.css'

const app = document.querySelector('#app')

const asciiArt = {
  logo: `
   __
  / _\\
  \\_ \\
  _\\ /
  \\__/
  `,
  hero: `
      .           .
    /' \\         / \\
   /   | .---.  |   \\
  |    |/  _  \\ |    |
  |    |\\  _  / |    |
   \\   | '---'  |   /
    \\./         \\./
      .           .
  `
}

const content = {
  home: `
    <section class="hero-section">
      <div class="grid-2">
        <div class="hero-text">
          <h1>DEGRADATION ARCHIVE<br>// SPACEKID</h1>
          <p>Yohai Perez Carmel - crafting music and sounds. I mix, I make, I break. And this is where the leftovers go: everything decays here anyway, might as well make it pretty.</p>
          <div style="margin-top: 2rem;">
            <a href="#" class="btn-glitch">EXPLORE_WORK</a>
          </div>
        </div>
        <div class="hero-visual">
          <div id="ascii-bg-animation" class="ascii-bg-animation"></div>
          <div class="video-container" style="width: 100%;">
            <video class="video-layer video-color" src="/videos/1.MP4" muted loop playsinline></video>
            <video class="video-layer video-ascii" src="/videos/1_ASCII.mp4" muted loop playsinline></video>

          </div>
        </div>
      </div>
    </section>


  `,
  audio: `
    <section class="page-section">
      <h2>SONIC_ARCHIVE</h2>
      
      <h3>MUSIC</h3>
      <div class="track-grid">
        <div class="track-card" data-src="/audio/1. butikbeduei.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">BUTIKBEDUEI</span>
            <span class="track-meta">[TRACK_01]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">|||ı|ı||ı||||ı|ı||ı|</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/2. ARTIFCTST.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">ARTIFCTST</span>
            <span class="track-meta">[TRACK_02]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">ı||ı|||ı||......||</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/3. ken 12.11 4.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">KEN_12.11</span>
            <span class="track-meta">[TRACK_03]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">||||||....|||ı|ı||</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/4. digisign\\.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">DIGISIGN</span>
            <span class="track-meta">[TRACK_04]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">..|..||..|..||..|.</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/5. GIVEN 11.10.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">GIVEN_11.10</span>
            <span class="track-meta">[TRACK_05]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">||..||..||..||..||</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/6. Franchdown 11.10 b.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">FRANCHDOWN</span>
            <span class="track-meta">[TRACK_06]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">|ı|ı|ı|ı|ı|ı|ı|ı|ı</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/7. skam.mp3" data-playing="false">
          <div class="track-header">
            <span class="track-title">SKAM</span>
            <span class="track-meta">[TRACK_07]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">......||||||......</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/8. supermariovhs 2.mp3" data-playing="false">
          <div class="track-header">
            <span class="track-title">SUPERMARIO_VHS</span>
            <span class="track-meta">[TRACK_08]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">||||..||||..||||..</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/9. GHOSTOFME\\.mp3" data-playing="false">
          <div class="track-header">
            <span class="track-title">GHOST_OF_ME</span>
            <span class="track-meta">[TRACK_09]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">..||..||..||..||..</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/10. gieeeV2.mp3" data-playing="false">
          <div class="track-header">
            <span class="track-title">GIEEE_V2</span>
            <span class="track-meta">[TRACK_10]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">||..||..||..||..||</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/11. klash 2.mp3" data-playing="false">
          <div class="track-header">
            <span class="track-title">KLASH_2</span>
            <span class="track-meta">[TRACK_11]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">|ı|ı|ı|ı|ı|ı|ı|ı|ı</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/12. SHIPUDIM 3.mp3" data-playing="false">
          <div class="track-header">
            <span class="track-title">SHIPUDIM_3</span>
            <span class="track-meta">[TRACK_12]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">......||||||......</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/13. TAntrum 5.mp3" data-playing="false">
          <div class="track-header">
            <span class="track-title">TANTRUM_5</span>
            <span class="track-meta">[TRACK_13]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">||||..||||..||||..</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/14. emergence(tiredcities)3.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">EMERGENCE</span>
            <span class="track-meta">[TRACK_14]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">..||..||..||..||..</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/15. NOKA.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">NOKA</span>
            <span class="track-meta">[TRACK_15]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">||..||..||..||..||</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/16. moving on.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">MOVING_ON</span>
            <span class="track-meta">[TRACK_16]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">|ı|ı|ı|ı|ı|ı|ı|ı|ı</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/17. apxxprss.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">APXXPRSS</span>
            <span class="track-meta">[TRACK_17]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">......||||||......</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/18. dd.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">DD</span>
            <span class="track-meta">[TRACK_18]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">||||..||||..||||..</div>
          </div>
        </div>
      </div>

      <h3>SOUNDS</h3>
      <div class="track-grid">
        <div class="track-card" data-src="/audio/Pitch_bend_chaos.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">PITCH_BEND_CHAOS.WAV</span>
            <span class="track-meta">[RAW_DATA]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">|||ı|ı||ı||||ı|ı||ı|</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/data.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">DATA.WAV</span>
            <span class="track-meta">[SYSTEM_LOG]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">ı||ı|||ı||......||</div>
          </div>
        </div>

        <div class="track-card" data-src="/audio/vcvsesh.wav" data-playing="false">
          <div class="track-header">
            <span class="track-title">VCVSESH.WAV</span>
            <span class="track-meta">[MODULAR_SYNTH]</span>
          </div>
          <div class="track-controls">
            <button class="play-btn">></button>
            <div class="waveform">||||||....|||ı|ı||</div>
          </div>
        </div>
      </div>
    </section>
  `,
  video: `
    <section class="page-section">
      <h2>VISUAL_FEED</h2>
      <div class="video-carousel">
        <button class="carousel-btn carousel-prev" aria-label="Previous video">←</button>
        <div class="carousel-track">
          <div class="video-container">
            <video class="video-layer video-color" src="/videos/1.MP4" muted loop playsinline></video>
            <video class="video-layer video-ascii" src="/videos/1_ASCII.mp4" muted loop playsinline></video>
            <div class="video-info">
              <h3>SYSTEM_BREACH</h3>
              <p>[ERR_CODE: 404_FOUND]</p>
            </div>
          </div>
          <div class="video-container">
            <video class="video-layer video-color" src="/videos/2.MP4" muted loop playsinline></video>
            <video class="video-layer video-ascii" src="/videos/2_ASCII.mp4" muted loop playsinline></video>
            <div class="video-info">
              <h3>DATA_CASCADE</h3>
              <p>[FLOW_RATE: 99.9%]</p>
            </div>
          </div>
          <div class="video-container">
            <video class="video-layer video-color" src="/videos/3.MP4" muted loop playsinline></video>
            <video class="video-layer video-ascii" src="/videos/3_ASCII.mp4" muted loop playsinline></video>
            <div class="video-info">
              <h3>NEURAL_SYNC</h3>
              <p>[LATENCY: 0ms]</p>
            </div>
          </div>
          <div class="video-container">
            <video class="video-layer video-color" src="/videos/4.MP4" muted loop playsinline></video>
            <video class="video-layer video-ascii" src="/videos/4_ASCII.mp4" muted loop playsinline></video>
            <div class="video-info">
              <h3>VOID_SIGNAL</h3>
              <p>[SOURCE: UNKNOWN]</p>
            </div>
          </div>
        </div>
        <button class="carousel-btn carousel-next" aria-label="Next video">→</button>
      </div>
      <div class="carousel-indicators">
        <span class="indicator active"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
        <span class="indicator"></span>
      </div>
    </section>
  `,
  images: `
    <section class="page-section">
      <h2>STATIC_MEMORIES</h2>
      <div class="grid-3">
        <div class="ascii-card image-card" style="padding: 0; overflow: hidden; border: 1px solid var(--border-color); position: relative;">
           <div class="image-ascii-bg"></div>
           <img src="/images/image1.JPG" class="gallery-image">
           <div style="padding: 1rem; position: relative; z-index: 2;">
             <p style="margin: 0; font-size: 0.8rem;">IMG_001.RAW</p>
           </div>
        </div>
        <div class="ascii-card image-card" style="padding: 0; overflow: hidden; border: 1px solid var(--border-color); position: relative;">
           <div class="image-ascii-bg"></div>
           <img src="/images/image_2.JPG" class="gallery-image">
           <div style="padding: 1rem; position: relative; z-index: 2;">
             <p style="margin: 0; font-size: 0.8rem;">IMG_002.RAW</p>
           </div>
        </div>
        <div class="ascii-card image-card" style="padding: 0; overflow: hidden; border: 1px solid var(--border-color); position: relative;">
           <div class="image-ascii-bg"></div>
           <img src="/images/image_3.jpg" class="gallery-image">
           <div style="padding: 1rem; position: relative; z-index: 2;">
             <p style="margin: 0; font-size: 0.8rem;">IMG_003.RAW</p>
           </div>
        </div>
        <div class="ascii-card image-card" style="padding: 0; overflow: hidden; border: 1px solid var(--border-color); position: relative;">
           <div class="image-ascii-bg"></div>
           <img src="/images/Image_4.jpg" class="gallery-image">
           <div style="padding: 1rem; position: relative; z-index: 2;">
             <p style="margin: 0; font-size: 0.8rem;">IMG_004.RAW</p>
           </div>
        </div>
        <div class="ascii-card image-card" style="padding: 0; overflow: hidden; border: 1px solid var(--border-color); position: relative;">
           <div class="image-ascii-bg"></div>
           <img src="/images/image_5.jpg" class="gallery-image">
           <div style="padding: 1rem; position: relative; z-index: 2;">
             <p style="margin: 0; font-size: 0.8rem;">IMG_005.RAW</p>
           </div>
        </div>
        <div class="ascii-card image-card" style="padding: 0; overflow: hidden; border: 1px solid var(--border-color); position: relative;">
           <div class="image-ascii-bg"></div>
           <img src="/images/image_6.jpg" class="gallery-image">
           <div style="padding: 1rem; position: relative; z-index: 2;">
             <p style="margin: 0; font-size: 0.8rem;">IMG_006.RAW</p>
           </div>
        </div>
      </div>
    </section>
  `,
  text: `
    <section class="page-section">
      <h2>LOG_ENTRIES</h2>
      <div style="display: flex; flex-direction: column; gap: 2rem;">
        <article class="ascii-card">
           <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
             <span style="color: var(--accent-color);">SYSTEM_INIT</span>
             <span style="color: var(--dim-color);">2025-11-26</span>
           </div>
           <p>The core is stable. The ghost is quiet today. We are observing the static. This new interface represents a shift towards structured data presentation while maintaining the raw aesthetic of the underlying code.</p>
        </article>
        <article class="ascii-card">
           <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
             <span style="color: var(--accent-color);">SIGNAL_LOSS</span>
             <span style="color: var(--dim-color);">2025-11-25</span>
           </div>
           <p>Detected interference in sector 7. Re-routing data streams through the secondary mesh. The visual feed was momentarily corrupted, resulting in interesting artifacts.</p>
        </article>
      </div>
    </section>
  `,
  tools: `
    <section class="page-section">
      <h2>DIGITAL_TOOLS</h2>
      <div class="tool-grid">
        <div class="tool-card">
          <div class="tool-header">
            <span class="tool-icon">⚡</span>
            <h3>GLITCH_GEN_V1</h3>
          </div>
          <div class="tool-status">
            <span class="status-dot online"></span>
            <span>ONLINE</span>
          </div>
          <p>A command-line tool for corrupting image data in controlled bursts. Perfect for creating datamosh effects.</p>
          <div class="tool-footer">
            <span class="tool-version">v1.0.2</span>
            <a href="#" class="btn-glitch small">DOWNLOAD</a>
          </div>
        </div>

        <div class="tool-card">
          <div class="tool-header">
            <span class="tool-icon">🌊</span>
            <h3>WAVE_ANALYZER</h3>
          </div>
          <div class="tool-status">
            <span class="status-dot beta"></span>
            <span>BETA</span>
          </div>
          <p>Real-time audio visualization utility. Deconstructs frequencies into raw ASCII data streams.</p>
          <div class="tool-footer">
            <span class="tool-version">v0.9.1</span>
            <a href="#" class="btn-glitch small">ACCESS</a>
          </div>
        </div>

        <div class="tool-card">
          <div class="tool-header">
            <span class="tool-icon">🎛️</span>
            <h3>SIGNAL_PROC</h3>
          </div>
          <div class="tool-status">
            <span class="status-dot offline"></span>
            <span>OFFLINE</span>
          </div>
          <p>Modular synthesis patch for VCV Rack. Generates random voltage fluctuations based on system uptime.</p>
          <div class="tool-footer">
            <span class="tool-version">v2.1.0</span>
            <a href="#" class="btn-glitch small disabled">ARCHIVED</a>
          </div>
        </div>

        <div class="tool-card">
          <div class="tool-header">
            <span class="tool-icon">👁️</span>
            <h3>ASCII_CAM</h3>
          </div>
          <div class="tool-status">
            <span class="status-dot dev"></span>
            <span>IN_DEV</span>
          </div>
          <p>Webcam to ASCII converter with real-time edge detection and density mapping.</p>
          <div class="tool-footer">
            <span class="tool-version">v0.1.0</span>
            <a href="#" class="btn-glitch small">PREVIEW</a>
          </div>
        </div>
      </div>
    </section>
  `
}

function renderLayout() {
  app.innerHTML = `
    <div class="layout-grid">
      <header>
        <div class="brand">SPACEKID</div>
        <nav>
          <a href="#" data-section="home" class="active">HOME</a>
          <a href="#" data-section="audio">AUDIO</a>
          <a href="#" data-section="video">VIDEO</a>
          <a href="#" data-section="images">IMAGES</a>
          <a href="#" data-section="tools">TOOLS</a>
          <a href="#" data-section="text">TEXT</a>
        </nav>
      </header>
      
      <main id="main-content">
        ${content.home}
      </main>

      <footer>
        <div class="grid-3" style="text-align: left; margin-bottom: 2rem;">
          <div>
            <h4 style="color: var(--accent-color); margin-bottom: 1rem;">// CONTACT</h4>
            <p style="font-size: 0.8rem;">signal@spacekid.net<br>freq: 104.5MHz</p>
          </div>
          <div>
             <h4 style="color: var(--accent-color); margin-bottom: 1rem;">// NETWORK</h4>
             <p style="font-size: 0.8rem;">Github<br>Twitter<br>Are.na</p>
          </div>
          <div>
             <h4 style="color: var(--accent-color); margin-bottom: 1rem;">// STATUS</h4>
             <p style="font-size: 0.8rem;">System: ONLINE<br>Uptime: <span id="uptime">00:00:00</span></p>
          </div>
        </div>
        <div style="border-top: 1px solid var(--border-color); padding-top: 2rem;">
          &copy; 2025 SPACEKID SYSTEMS. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  `

  setupNavigation()
  setupUptime()
  setupVideo() // Initial load
}

let videoIntervals = []

function clearVideoIntervals() {
  videoIntervals.forEach(clearInterval)
  videoIntervals = []
}

function renderContent(section) {
  const mainContent = document.getElementById('main-content')
  if (!mainContent) return

  // Fade out
  mainContent.style.opacity = '0'

  setTimeout(() => {
    mainContent.innerHTML = content[section] || content.home

    // Setup specific section logic
    if (section === 'video') {
      setupVideo()
      setupCarousel()
    } else if (section === 'audio') {
      setupAudio()
    } else if (section === 'images') {
      setupImageAsciiBackgrounds()
    } else if (section === 'home') {
      setupAsciiBackgroundAnimation()
      setupHeroAnimation()
      setupVideo()
    }

    // Fade in
    mainContent.style.opacity = '1'
  }, 200)
}

function setupNavigation() {
  const links = document.querySelectorAll('nav a')

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const section = link.getAttribute('data-section')

      // Update active state
      links.forEach(l => l.classList.remove('active'))
      link.classList.add('active')

      renderContent(section)
    })
  })
}

function setupVideo() {
  const containers = document.querySelectorAll('.video-container')
  containers.forEach(container => {
    const v1 = container.querySelector('.video-color')
    const v2 = container.querySelector('.video-ascii')

    if (v1 && v2) {
      v1.play().catch(e => console.log('Autoplay blocked', e))
      v2.play().catch(e => console.log('Autoplay blocked', e))

      // Simple sync check
      const interval = setInterval(() => {
        if (Math.abs(v1.currentTime - v2.currentTime) > 0.2) {
          v2.currentTime = v1.currentTime
        }
      }, 2000)
      videoIntervals.push(interval)
    }
  })

  setupAsciiBackgroundAnimation()
  // Added for 'home' section specific animation
  const mainContent = document.getElementById('main-content');
  if (mainContent && mainContent.innerHTML.includes('id="hero-section"')) { // Check if home section is loaded
    setupHeroAnimation();
  }
}

function setupImageAsciiBackgrounds() {
  const containers = document.querySelectorAll('.image-ascii-bg')
  if (!containers.length) return

  const chars = ['.', '-', '~', '/', '\\', '|', '#', '+', 'X', '0', '1', '&', '%', '$', '*', '@']

  containers.forEach((container) => {
    const rows = 80
    const cols = 100
    let grid = []

    // Init grid
    for (let i = 0; i < rows; i++) {
      let row = []
      for (let j = 0; j < cols; j++) {
        row.push(chars[Math.floor(Math.random() * chars.length)])
      }
      grid.push(row)
    }

    const animate = () => {
      const time = Date.now() / 1000
      let output = ''

      for (let y = 0; y < rows; y++) {
        let line = ''
        for (let x = 0; x < cols; x++) {
          // Plasma calculation
          const v1 = Math.sin(x * 0.05 + time)
          const v2 = Math.sin((y * 0.05 + time) * 0.5)
          const v3 = Math.sin((x * 0.05 + y * 0.05 + time) * 0.5)
          const v4 = Math.sin(Math.sqrt(x * x + y * y) * 0.05 + time)

          const value = (v1 + v2 + v3 + v4) / 4

          // Map -1..1 to 0..1
          const intensity = (value + 1) / 2

          // Map to char index
          const charIndex = Math.floor(intensity * (chars.length - 1))
          line += chars[charIndex]
        }
        output += line + '\n'
      }

      container.innerText = output
    }

    // Animate each background independently
    setInterval(animate, 50)
    animate()
  })
}

function setupAsciiBackgroundAnimation() {
  const container = document.getElementById('ascii-bg-animation')
  if (!container) return

  // Weighted character sets for more interesting visuals
  const chars = {
    common: ['.', '-', '~', '/', '\\', '|'],
    rare: ['#', '+', 'X', '0', '1', '&', '%', '$', '*', '@', '='],
    wave: ['~', '≈', '∼', '-', '_']
  }

  const getRandomChar = () => {
    const rand = Math.random()
    if (rand > 0.85) return chars.rare[Math.floor(Math.random() * chars.rare.length)]
    if (rand > 0.7) return chars.wave[Math.floor(Math.random() * chars.wave.length)]
    return chars.common[Math.floor(Math.random() * chars.common.length)]
  }

  const rows = 50
  const cols = 100
  let grid = []
  let targetDelay = 250
  let currentDelay = 250
  let timeoutId = null
  let isHovered = false

  // Init grid with weighted randomness
  for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < cols; j++) {
      row.push(getRandomChar())
    }
    grid.push(row)
  }

  const animate = () => {
    const time = Date.now() / 1000
    let output = ''

    // Smooth delay transitions
    if (currentDelay < targetDelay) {
      currentDelay = Math.min(currentDelay + 50, targetDelay)
    } else if (currentDelay > targetDelay) {
      currentDelay = Math.max(currentDelay - 20, targetDelay)
    }

    for (let i = 0; i < rows; i++) {
      // Variable row shifting based on hover state
      const shiftChance = isHovered ? 0.9 : 0.75
      if (Math.random() > shiftChance) {
        const shiftAmount = Math.floor(Math.random() * (isHovered ? 2 : 5)) + 1
        for (let k = 0; k < shiftAmount; k++) grid[i].push(grid[i].shift())
      }

      // Dynamic character corruption
      for (let j = 0; j < cols; j++) {
        const corruptChance = isHovered ? 0.97 : 0.92
        if (Math.random() > corruptChance) {
          grid[i][j] = getRandomChar()
        }
      }

      // Vertical wave corruption effect
      const verticalWave = Math.sin(i * 0.3 + time * 3) > 0.7
      if (verticalWave && Math.random() > 0.95) {
        grid[i][Math.floor(Math.random() * cols)] = getRandomChar()
      }

      // Full row corruption with fade pattern
      if (Math.random() > 0.985) {
        const corruptChar = chars.rare[Math.floor(Math.random() * chars.rare.length)]
        const corruptLength = Math.floor(cols * (0.3 + Math.random() * 0.4))
        const startPos = Math.floor(Math.random() * (cols - corruptLength))
        for (let k = startPos; k < startPos + corruptLength; k++) {
          grid[i][k] = corruptChar
        }
      }

      // Enhanced wave motion with multiple frequencies
      const baseWave = Math.sin(i * 0.3 + time * 2) * 8
      const microWave = Math.sin(i * 0.8 + time * 7) * 3
      const noise = Math.random() * (isHovered ? 15 : 25)
      const indent = Math.max(0, Math.floor(baseWave + microWave + noise))

      // Dynamic trimming based on cosine wave
      const trimWave = Math.cos(i * 0.25 - time * 1.5)
      const trim = Math.floor((trimWave + 1) * 8 + Math.random() * 12)

      const lineContent = grid[i].slice(0, Math.max(0, cols - trim)).join('')
      output += ' '.repeat(indent) + lineContent + '\n'
    }

    container.innerText = output
    timeoutId = setTimeout(animate, currentDelay)
  }

  animate()

  videoIntervals.push({
    clearInterval: () => clearTimeout(timeoutId)
  })

  // Enhanced hover interaction with smooth transitions
  const heroVisual = document.querySelector('.hero-visual')
  if (heroVisual) {
    heroVisual.addEventListener('mouseenter', () => {
      isHovered = true
      targetDelay = 500
      container.style.transition = 'opacity 0.8s ease'
      container.style.opacity = '0.5'
    })

    heroVisual.addEventListener('mouseleave', () => {
      isHovered = false
      targetDelay = 100
      container.style.opacity = '0.3'
    })
  }
}

function setupCarousel() {
  const track = document.querySelector('.carousel-track')
  const videos = track?.querySelectorAll('.video-container')
  const prevBtn = document.querySelector('.carousel-prev')
  const nextBtn = document.querySelector('.carousel-next')
  const indicators = document.querySelectorAll('.indicator')

  if (!track || !videos.length) return

  let currentIndex = 0

  const showVideo = (index) => {
    const total = videos.length

    videos.forEach((video, i) => {
      video.classList.remove('active', 'prev', 'next')

      if (i === index) {
        video.classList.add('active')
      } else if (i === (index - 1 + total) % total) {
        video.classList.add('prev')
      } else if (i === (index + 1) % total) {
        video.classList.add('next')
      }
    })

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle('active', i === index)
    })
  }

  const nextVideo = () => {
    currentIndex = (currentIndex + 1) % videos.length
    showVideo(currentIndex)
  }

  const prevVideo = () => {
    currentIndex = (currentIndex - 1 + videos.length) % videos.length
    showVideo(currentIndex)
  }

  prevBtn?.addEventListener('click', prevVideo)
  nextBtn?.addEventListener('click', nextVideo)

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index
      showVideo(currentIndex)
    })
  })

  // Show first video
  showVideo(0)
}


let currentAudio = null;

function setupAudio() {
  const tracks = document.querySelectorAll('.track-card')

  tracks.forEach(track => {
    const btn = track.querySelector('.play-btn')
    const waveform = track.querySelector('.waveform')
    const src = track.dataset.src

    if (!waveform || !src) return

    const originalWave = waveform.innerText
    let interval

    btn.addEventListener('click', () => {
      const isPlaying = track.dataset.playing === 'true'

      // Stop all others
      tracks.forEach(t => {
        if (t !== track && t.dataset.playing === 'true') {
          t.querySelector('.play-btn').innerText = '>'
          t.dataset.playing = 'false'
          clearInterval(t.dataset.interval)
          // Reset wave
          const tWave = t.querySelector('.waveform')
          if (tWave) tWave.innerText = t.dataset.originalWave || tWave.innerText
        }
      })

      if (currentAudio) {
        currentAudio.pause()
        currentAudio = null
      }

      if (isPlaying) {
        track.dataset.playing = 'false'
        btn.innerText = '>'
        clearInterval(interval)
        waveform.innerText = originalWave
        setupCardVisualizer(null) // Stop card visualizer
      } else {
        // Start playing
        currentAudio = new Audio(src)
        currentAudio.crossOrigin = "anonymous" // Enable CORS for audio analysis

        // Setup Audio Context for analysis
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
        const analyser = audioCtx.createAnalyser()
        analyser.fftSize = 32
        const source = audioCtx.createMediaElementSource(currentAudio)
        source.connect(analyser)
        analyser.connect(audioCtx.destination)

        currentAudio.play()

        currentAudio.onended = () => {
          track.dataset.playing = 'false'
          btn.innerText = '>'
          clearInterval(interval)
          waveform.innerText = originalWave
          currentAudio = null
          setupCardVisualizer(null)
          audioCtx.close()
        }

        track.dataset.playing = 'true'
        track.dataset.originalWave = originalWave
        btn.innerText = '||'

        interval = setInterval(() => {
          const bars = ['|', 'ı', ':', '.', ' ']
          let newWave = ''
          for (let i = 0; i < 20; i++) {
            newWave += bars[Math.floor(Math.random() * bars.length)]
          }
          waveform.innerText = newWave
        }, 100)
        track.dataset.interval = interval

        // Start card visualizer with analyser
        setupCardVisualizer(track, analyser)
      }
    })
  })
}

let cardVisualizerInterval = null
let currentVisualizerContainer = null

function setupCardVisualizer(targetElement = null, analyser = null) {
  // Cleanup existing
  if (cardVisualizerInterval) {
    clearInterval(cardVisualizerInterval)
    cardVisualizerInterval = null
  }

  if (currentVisualizerContainer) {
    currentVisualizerContainer.remove()
    currentVisualizerContainer = null
  }

  if (!targetElement) return

  // Create new container
  const container = document.createElement('div')
  container.className = 'ascii-visualizer'
  targetElement.appendChild(container)
  currentVisualizerContainer = container

  const chars = ['.', ':', ';', '|', '=', '+', 'x', 'X', '#']

  // Dynamic grid size based on card dimensions
  const rect = targetElement.getBoundingClientRect()
  const charWidth = 6 // Approx width of char at 10px font
  const charHeight = 10 // Line height
  const cols = Math.floor(rect.width / charWidth)
  const rows = Math.floor(rect.height / charHeight)

  const dataArray = new Uint8Array(analyser ? analyser.frequencyBinCount : 0)

  const animate = () => {
    const time = Date.now() / 500
    let output = ''
    const centerX = cols / 2
    const centerY = rows / 2

    // Get audio data
    let audioLevel = 1
    if (analyser) {
      analyser.getByteFrequencyData(dataArray)
      const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length
      audioLevel = 0.5 + (average / 128) * 2 // Scale factor based on volume
    }

    for (let y = 0; y < rows; y++) {
      let line = ''
      for (let x = 0; x < cols; x++) {
        const dx = x - centerX
        const dy = (y - centerY) * 2
        const distance = Math.sqrt(dx * dx + dy * dy)
        const angle = Math.atan2(dy, dx)

        // Modulate wave with audio level
        const wave = Math.sin(distance * (0.4 * audioLevel) - time * 4 + Math.sin(angle * 3 + time))

        const intensity = (wave + 1) / 2
        const charIndex = Math.floor(intensity * (chars.length - 1))
        line += chars[charIndex]
      }
      output += line + '\n'
    }
    container.innerText = output
  }

  cardVisualizerInterval = setInterval(animate, 50)
}

function setupUptime() {
  const uptimeEl = document.getElementById('uptime')
  let seconds = 0
  setInterval(() => {
    seconds++
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0')
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0')
    const s = (seconds % 60).toString().padStart(2, '0')
    if (uptimeEl) uptimeEl.innerText = `${h}:${m}:${s}`
  }, 1000)
}

// Sound Manager for UI Effects
class SoundManager {
  constructor() {
    this.enabled = localStorage.getItem('ui_audio_enabled') === 'true'
    this.sounds = {}
    this.init()
  }

  async init() {
    // Auto-detect sounds from src/assets/ui_sounds using Vite's glob import
    // This allows users to just drop files in the folder
    const soundFiles = import.meta.glob('/src/assets/ui_sounds/*.(mp3|wav|ogg)', { eager: true, as: 'url' })

    for (const path in soundFiles) {
      const fileName = path.split('/').pop().split('.')[0].toLowerCase()
      this.sounds[fileName] = new Audio(soundFiles[path])
      this.sounds[fileName].volume = 0.4
    }

    this.setupGlobalListeners()
    this.renderToggle()
  }

  toggle() {
    this.enabled = !this.enabled
    localStorage.setItem('ui_audio_enabled', this.enabled)
    this.updateToggleUI()

    if (this.enabled) {
      this.playSound('enable') || this.playSound('click')
      this.startRoomTone()
    } else {
      this.stopRoomTone()
    }
  }

  startRoomTone() {
    if (!this.enabled || !this.sounds['roomtone']) return
    if (this.roomToneAudio) return

    this.roomToneAudio = this.sounds['roomtone'].cloneNode()
    this.roomToneAudio.loop = true
    this.roomToneAudio.volume = 0.15
    this.roomToneAudio.play().catch(e => console.log('Roomtone play failed', e))
  }

  stopRoomTone() {
    if (this.roomToneAudio) {
      this.roomToneAudio.pause()
      this.roomToneAudio = null
    }
  }

  playSound(name) {
    if (!this.enabled || !this.sounds[name]) return

    // Clone node to allow overlapping sounds
    const sound = this.sounds[name].cloneNode()
    sound.volume = 0.3
    // Force reset for instant replay
    sound.currentTime = 0
    // Play immediately
    const playPromise = sound.play()
    if (playPromise !== undefined) {
      playPromise.catch(e => {
        // Auto-play policy might block this
        // console.log('Audio play failed', e)
      })
    }
    return true
  }

  setupGlobalListeners() {
    document.addEventListener('mousedown', (e) => {
      // Hero video glitch clicks
      const heroVisual = e.target.closest('.hero-visual')
      if (heroVisual) {
        const glitchSounds = ['clickglitch1', 'clickglitch2', 'clickglitch3', 'clickglitch4', 'clickglitch5', 'clickglitch6']
        const randomGlitch = glitchSounds[Math.floor(Math.random() * glitchSounds.length)]
        this.playSound(randomGlitch)

        // Visual glitch effect
        const container = heroVisual.querySelector('.video-container')
        if (container) {
          container.style.filter = 'grayscale(100%) contrast(1.5) brightness(1.2)'
          setTimeout(() => {
            container.style.filter = ''
          }, 150)
        }
        return
      }

      // Check for unavailable/disabled state
      if (e.target.classList.contains('disabled') || e.target.hasAttribute('disabled') || e.target.getAttribute('aria-disabled') === 'true') {
        this.playSound('unavailable')
        return
      }

      // Navigation Switch
      if (e.target.tagName === 'A' && e.target.closest('nav')) {
        this.playSound('nav_switch')
        return
      }

      // Carousel Slide
      if (e.target.closest('.carousel-btn')) {
        this.playSound('carousel_slide')
        return
      }

      // Download/Access Buttons
      if (e.target.classList.contains('btn-glitch')) {
        this.playSound('download_start')
        return
      }

      // Check for successful actions (links, buttons, play buttons)
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('.play-btn')) {
        this.playSound('successful_click')
        return
      }

      // Default click for everything else
      this.playSound('click')
    })

    // Looped hover sounds
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, .track-card, .video-container, .gallery-image')
      if (target && !target.dataset.hoverSoundActive) {
        target.dataset.hoverSoundActive = 'true'
        this.startHoverSound()

        const stopSound = () => {
          this.stopHoverSound()
          delete target.dataset.hoverSoundActive
          target.removeEventListener('mouseleave', stopSound)
        }

        target.addEventListener('mouseleave', stopSound)
      }
    })
  }

  startHoverSound() {
    if (!this.enabled || !this.sounds['hover']) return

    // Stop any existing hover sound first
    this.stopHoverSound()

    this.currentHoverSound = this.sounds['hover'].cloneNode()
    this.currentHoverSound.loop = true
    this.currentHoverSound.volume = 0.3
    this.currentHoverSound.play().catch(e => console.log('Hover play failed', e))
  }

  stopHoverSound() {
    if (this.currentHoverSound) {
      this.currentHoverSound.pause()
      this.currentHoverSound.currentTime = 0
      this.currentHoverSound = null
    }
  }

  renderToggle() {
    // Wait for footer to exist
    const checkFooter = setInterval(() => {
      const footer = document.querySelector('footer')
      if (footer) {
        clearInterval(checkFooter)

        // Remove existing toggle if any
        const existing = document.querySelector('.settings-toggle')
        if (existing) existing.remove()

        const toggleContainer = document.createElement('div')
        toggleContainer.className = 'settings-toggle'
        toggleContainer.style.marginTop = '2rem'
        toggleContainer.style.paddingTop = '1rem'
        toggleContainer.style.borderTop = '1px dashed var(--border-color)'
        toggleContainer.style.display = 'flex'
        toggleContainer.style.justifyContent = 'center'
        toggleContainer.style.alignItems = 'center'
        toggleContainer.style.gap = '0.5rem'
        toggleContainer.style.cursor = 'pointer'
        toggleContainer.style.fontFamily = 'var(--font-main)'
        toggleContainer.style.fontSize = '0.8rem'
        toggleContainer.style.color = 'var(--dim-color)'

        toggleContainer.innerHTML = `
          <span>UI_AUDIO:</span>
          <span id="audio-status" style="color: ${this.enabled ? 'var(--accent-color)' : 'inherit'}">
            [${this.enabled ? 'ON' : 'OFF'}]
          </span>
        `

        toggleContainer.addEventListener('click', () => this.toggle())

        // Append to the end of footer
        footer.appendChild(toggleContainer)
      }
    }, 100)
  }

  updateToggleUI() {
    const status = document.getElementById('audio-status')
    if (status) {
      status.innerHTML = `[${this.enabled ? 'ON' : 'OFF'}]`
      status.style.color = this.enabled ? 'var(--accent-color)' : 'inherit'
    }
  }
}

class InteractiveText {
  constructor(element) {
    this.element = element
    this.originalText = element.innerText
    this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'
    this.init()
  }

  init() {
    // Split text into spans, preserving whitespace
    const html = this.originalText
      .split('')
      .map(char => {
        if (char === ' ') return ' ' // Keep spaces as text nodes to preserve wrapping
        return `<span class="hover-char" data-char="${char}">${char}</span>`
      })
      .join('')

    this.element.innerHTML = html

    // Add hover listener
    this.element.addEventListener('mouseover', (e) => {
      if (e.target.classList.contains('hover-char')) {
        this.animateChar(e.target)
      }
    })
  }

  animateChar(span) {
    if (span.dataset.animating === 'true') return
    span.dataset.animating = 'true'

    const originalChar = span.dataset.char
    let iterations = 0
    const maxIterations = 5

    const interval = setInterval(() => {
      span.innerText = this.chars[Math.floor(Math.random() * this.chars.length)]

      iterations++
      if (iterations >= maxIterations) {
        clearInterval(interval)
        span.innerText = originalChar
        span.dataset.animating = 'false'
      }
    }, 50)
  }
}

function setupHeroAnimation() {
  // Bio Text Animation
  const heroText = document.querySelector('.hero-text p')
  if (heroText) {
    new InteractiveText(heroText)
  }

  // Title Animation (SPACEKID)
  const heroTitle = document.querySelector('.hero-text h1')
  if (heroTitle) {
    // Wrap SPACEKID in a span for targeting
    heroTitle.innerHTML = heroTitle.innerHTML.replace('// SPACEKID', '// <span class="glitch-title">SPACEKID</span>')

    const titleSpan = heroTitle.querySelector('.glitch-title')
    if (titleSpan) {
      titleSpan.addEventListener('mouseenter', () => {
        let iterations = 0
        const original = 'SPACEKID'
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*'

        const interval = setInterval(() => {
          titleSpan.innerText = original
            .split('')
            .map((char, index) => {
              if (index < iterations) return original[index]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join('')

          if (iterations >= original.length) clearInterval(interval)
          iterations += 1 / 3
        }, 30)
      })
    }
  }
}

renderLayout()

// Initialize Sound Manager after layout render
const soundManager = new SoundManager()

// Initial Render
renderContent('home')
setupNavigation()
setupUptime()
setupHeroAnimation()
