module.exports = function(router) {
  

// Name and date


// router.get('/latest/child-details/name-date', (req, res) => {
//   res.sendFile(path.join(__dirname, 'child-details', 'name-date.html'));
// });
  // Triage Check answers
// Route for the Check Your Answers page (GET request)
router.get('/latest/informant/informant-triage/05-check', (req, res) => {
  // Mark the "Check your answers" page as visited
  req.session.data.checkAnswersTriageVisited = true;

  // Render the "Check your answers" page
  res.render('/latest/informant/informant-triage/05-check', { data: req.session.data });
});

 // Triage - who is informant - check answers behaviour
  router.get('/latest/informant/01-who-is-form', (req, res) => {
    res.render('informant-triage/01-who-is-informant', { data: req.session.data });
  });
  router.post('/latest/informant/01-who-is-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.whoIsInCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersTriageVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('informant-triage/05-check');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('informant-triage/03-married.html');
  }
  });

  // Triage - parents married or in a civil partnership - check answers behaviour
  router.get('/latest/informant/03-married-form', (req, res) => {
    res.render('informant-triage/03-married', { data: req.session.data });
  });
  router.post('/latest/informant/03-married-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.whoIsInCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersTriageVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('informant-triage/05-check');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('informant-triage/04-who-else.html');
  }
  });


  // // TASK LIST
 router.get('/latest/informant/task-list-inf-form', (req, res) => {
  req.session.data = req.session.data || {};
   res.render('task-list', { data: req.session.data });
 });



  // 1. Supporting info
  // 1.1: Prepare for appointment
  router.get('/latest/informant/prepare-for-appointment-form', (req, res) => {
    res.render('supporting-info/prepare-for-appointment', { data: req.session.data });
  });

  router.post('/latest/informant/prepare-for-appointment-form', (req, res) => {
    // Ensure session data exists
    req.session.data = req.session.data || {};
    // Mark page as completed
    req.session.data.prepareForAppointmentCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });
 
  // 1.2: Uploads
  router.get('/latest/informant/uploads-form', (req, res) => {
    res.render('supporting-info/uploads', { data: req.session.data });
  });

  router.post('/latest/informant/uploads-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.uploadsCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

    // 1.2: Comments
  router.get('/latest/informant/comments-form', (req, res) => {
    res.render('supporting-info/comments', { data: req.session.data });
  });

  router.post('/latest/informant/comments-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.commentsCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });


   // 2. Info from certificate


   // 2.0 f35 reason
  router.get('/latest/informant/f35-reason-form', (req, res) => {
    res.render('cause-of-death/f35-reason', { data: req.session.data });
  });

  router.post('/latest/informant/f35-reason-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.f35ReasonCompleted = true;
    res.redirect('task-list.html');
  //    if (req.session.data.checkAnswersVisited) {
  //   // If "Check your answers" has been visited, redirect back to it
  //   res.redirect('submit/check-answers-page');
  // } else {
  //   // Otherwise, redirect to the next page in the journey (Father's Name page)
  //   res.redirect('task-list.html');
  // }
  });

  // 2.1: Pregnancy and delivery
  router.get('/latest/informant/pregnancy-del-form', (req, res) => {
    res.render('cause-of-death/pregnancy-delivery', { data: req.session.data });
  });

  router.post('/latest/informant/pregnancy-del-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.pregCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('cause-of-death/cause-of-death.html');
  }
  });


    // 2.2: Cause of death
  router.get('/latest/informant/cause-of-death-form', (req, res) => {
    res.render('cause-of-death/cause-of-death', { data: req.session.data });
  });

  router.post('/latest/informant/cause-of-death-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.codCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

 // 2.2 : Coroner details
  router.get('/latest/informant/coroner-details-form', (req, res) => {
    res.render('cause-of-death/coroner-details', { data: req.session.data });
  });

  router.post('/latest/informant/coroner-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.corDetailsCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });




    // 2.3 Cause of death summary
  router.get('/latest/informant/medical-info-check-form', (req, res) => {
    res.render('cause-of-death/medical-info-check', { data: req.session.data });
  });

  router.post('/latest/informant/medical-info-check-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.pregCompleted = true;
    req.session.data.codCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

   // 3 Whose details
  

  // Cannot start yet (locked until 1 & 2 complete)
  // router.get('/latest/informant/whose-details-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   if (req.session.data.pregCompleted && req.session.data.codCompleted) {
  //     res.render('/latest/informant/informant-and-details', { data: req.session.data });
  //   } else {
  //     res.redirect('task-list.html');
  //   }
  // });

  router.post('/latest/informant/whose-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.whoseDetailsCompleted = true;
    //res.redirect('task-list.html');
    if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });



// 4 child details
// 4.1 child name, sex, date
  router.get('/latest/informant/name-date-form', (req, res) => {
    res.render('child-details/name-date', { data: req.session.data });
  });

  router.post('/latest/informant/name-date-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.nameDateCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 4.2 place of stillbirth
  router.get('/latest/informant/place-of-stillbirth-form', (req, res) => {
    res.render('child-details/place-of-stillbirth', { data: req.session.data });
  });

  router.post('/latest/informant/place-of-stillbirth-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.placeCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });


  // 5 Parent's details
// 5.1 mothers name
  router.get('/latest/informant/mothers-name-form', (req, res) => {
    res.render('parents-details/mothers-name', { data: req.session.data });
  });

  router.post('/latest/informant/mothers-name-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.mothersNameCompleted = true;
    //res.redirect('../task-list.html');

    if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 5.2 mothers details
  router.get('/latest/informant/mothers-details-form', (req, res) => {
    res.render('parents-details/mothers-details', { data: req.session.data });
  });

  router.post('/latest/informant/mothers-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.mothersDetailsCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 5.3 fathers name
  router.get('/latest/informant/fathers-name-form', (req, res) => {
    res.render('parents-details/fathers-name', { data: req.session.data });
  });

  router.post('/latest/informant/fathers-name-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.fathersNameCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 5.4 fathers details
  router.get('/latest/informant/fathers-details-form', (req, res) => {
    res.render('parents-details/fathers-details', { data: req.session.data });
  });

  router.post('/latest/informant/fathers-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.fathersDetailsCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

    // 6 Statistics
// 6.1 Confidential stats
router.get('/latest/informant/confidential-form', (req, res) => {
    res.render('stats/confidential', { data: req.session.data });
  });

  router.post('/latest/informant/confidential-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.statsConfidentialCompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

// 6.2 Voluntary stats
router.get('/latest/informant/voluntary-form', (req, res) => {
    res.render('stats/voluntary', { data: req.session.data });
  });

  router.post('/latest/informant/voluntary-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.statsVoluntaryCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });



// 7. Submit the registration Cannot start yet (locked until confidential stats complete)
// 7.1 Registrars details
  router.get('/latest/informant/register-page-form', (req, res) => {
    res.render('submit/register-page', { data: req.session.data });
  });

  router.post('/latest/informant/register-page-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.registerPageCompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/latest/informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 7.2 Check answers
// Route for the Check Your Answers page (GET request)
router.get('/latest/informant/submit/check-answers-page', (req, res) => {
  // Mark the "Check your answers" page as visited
  req.session.data.checkAnswersVisited = true;

  // Render the "Check your answers" page
  res.render('/latest/informant/submit/check-answers-page', { data: req.session.data });
});


  // router.get('/latest/submit/check-answers-form', (req, res) => {
  //   res.render('latest/submit/check-answers-page', { data: req.session.data });
  // });

  // router.post('/latest/submit/check-answers-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   req.session.data.checkAnswersCompleted = true;
  //   res.redirect('../task-list.html');
  // });

//need this at the end:
};