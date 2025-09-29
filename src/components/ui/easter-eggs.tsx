"use client"

import { useEffect } from "react"

export function EasterEggs() {
    useEffect(() => {
        // Console Easter Egg
        const consoleArt = `
    ╔══════════════════════════════════════╗
    ║                                      ║
    ║    🚀 Welcome to my portfolio! 🚀    ║
    ║                                      ║
    ║    Built with:                       ║
    ║    • Next.js 14                      ║
    ║    • React 18                        ║
    ║    • TypeScript                      ║
    ║    • TailwindCSS                     ║
    ║    • Framer Motion                   ║
    ║                                      ║
    ║    Thanks for checking out the code! ║
    ║    Feel free to reach out! 📧        ║
    ║                                      ║
    ╚══════════════════════════════════════╝
    `

        console.log(consoleArt)

        // Konami Code Easter Egg
        let konamiCode: string[] = []
        const konamiSequence = [
            "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
            "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
            "KeyB", "KeyA"
        ]

        const handleKeyDown = (e: KeyboardEvent) => {
            konamiCode.push(e.code)

            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift()
            }

            if (konamiCode.join(",") === konamiSequence.join(",")) {
                // Trigger special animation or effect
                document.body.style.animation = "rainbow 2s infinite"
                setTimeout(() => {
                    document.body.style.animation = ""
                }, 5000)

                // Show special message
                const message = document.createElement("div")
                message.innerHTML = "🎉 Konami Code activated! You found the secret! 🎉"
                message.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57);
          background-size: 400% 400%;
          animation: gradient 2s ease infinite;
          color: white;
          padding: 20px 40px;
          border-radius: 10px;
          font-size: 18px;
          font-weight: bold;
          z-index: 10000;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        `
                document.body.appendChild(message)

                setTimeout(() => {
                    document.body.removeChild(message)
                }, 3000)

                konamiCode = []
            }
        }

        // Add CSS for animations
        const style = document.createElement("style")
        style.textContent = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
      @keyframes gradient {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `
        document.head.appendChild(style)

        window.addEventListener("keydown", handleKeyDown)

        return () => {
            window.removeEventListener("keydown", handleKeyDown)
            document.head.removeChild(style)
        }
    }, [])

    return null
}
