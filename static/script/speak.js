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
          } 
          else if (command.includes('I want help')) {
            speak('Please dail on 1228');
          } 
          else if (command.includes ("I want to join community")) {
            speak('A person will be direct to you for assistance');
        } else if (command.includes ("Size of self help groups")) {
            speak('Size of 5 members');
        } else if (command.includes ('goodbye')) {
            speak('Thank you for you time');
        } 
        else if (command.includes('goodbye')) {
            speak('Goodbye!');
              break;
        }
       }
      });
