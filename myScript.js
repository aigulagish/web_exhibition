document
  .getElementsByTagName("push-to-talk-button")[0]
  .addEventListener("speechsegment", (e) => {

    const speechSegment = e.detail;
    if (speechSegment.intent.isFinal) {
      document.getElementById(speechSegment.intent['intent'])
              .scrollIntoView({behavior:'smooth'});
    }
  });
