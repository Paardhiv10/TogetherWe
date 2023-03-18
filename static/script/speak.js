const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;

      const synth = window.speechSynthesis;

      function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
      }

      function listen() {
        recognition.start();

        return new Promise((resolve, reject) => {
          recognition.onresult = event => {
            const result = event.results[event.resultIndex];
            const text = result[0].transcript.trim();
            resolve(text);
          };

          recognition.onerror = reject;
        });
      }

      document.getElementById('listen-button').addEventListener('click', async () => {
        while (true) {
          const command = await listen();

          if (command.includes('hello')) {
            speak('Hello! How can I help you?');
          } else if (command.includes('weather')) {
            speak('The weather is currently sunny.');
          } else if (command.includes('goodbye')) {
            speak('Goodbye!');
            break;
          }
        }
      });