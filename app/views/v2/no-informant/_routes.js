module.exports = function(router) {
  

// Name and date


// router.get('/coroner-inquest/child-details/name-date', (req, res) => {
//   res.sendFile(path.join(__dirname, 'child-details', 'name-date.html'));
// });




  // TASK LIST
  router.get('/v2/no-informant/task-list-noi-form', (req, res) => {
    req.session.data = req.session.data || {};
    res.render('task-list', { data: req.session.data });
  });
  // 1. Supporting info
  // 1.1: Prepare for appointment
  router.get('/v2/no-informant/prepare-for-appointment-form', (req, res) => {
    res.render('supporting-info/prepare-for-appointment', { data: req.session.data });
  });

  router.post('/v2/no-informant/prepare-for-appointment-form', (req, res) => {
    // Ensure session data exists
    req.session.data = req.session.data || {};
    // Mark page as completed
    req.session.data.prepareForAppointmentNICompleted = true;

    console.log('prep :', req.session.data);
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });
 
  // 1.2: Uploads
  router.get('/v2/no-informant//uploads-form', (req, res) => {
    res.render('supporting-info/uploads', { data: req.session.data });
  });

  router.post('/v2/no-informant/uploads-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.uploadsNICompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

    // 1.2: Comments
  router.get('/v2/no-informant/comments-form', (req, res) => {
    res.render('supporting-info/comments', { data: req.session.data });
  });

  router.post('/v2/no-informant/comments-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.commentsNICompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });
   // 2. Source of medical information

    // 2.1: Cause of death
  router.get('/v2/no-informant/cause-of-death-form', (req, res) => {
    res.render('cause-of-death/cause-of-death.html', { data: req.session.data });
  });

  router.post('/v2/no-informant/cause-of-death-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.causeDeathNICompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

   // 2.2 : Coroner details
  router.get('/v2/no-informant/coroner-details-form', (req, res) => {
    res.render('cause-of-death/coroner-details', { data: req.session.data });
  });

  router.post('/v2/no-informant/coroner-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.corDetailsNICompleted = true;
   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

    // 2.3 Cause of death summary
  router.get('/v2/no-informant/medical-info-check-form', (req, res) => {
    res.render('cause-of-death/medical-info-check', { data: req.session.data });
  });

  router.post('/v2/no-informant/medical-info-check-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.corNICompleted = true;
    req.session.data.codNICompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

   // 3 Whose details
  

  // Cannot start yet (locked until 1 & 2 complete)
  router.get('/v2/no-informant/whose-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    if (req.session.data.corNICompleted && req.session.data.codNICompleted) {
      res.render('coroner-inquest/informant-and-details', { data: req.session.data });
    } else {
      res.redirect('task-list.html');
    }
  });

  router.post('/v2/no-informant/whose-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.whoseDetailsNICompleted = true;
    //res.redirect('task-list.html');
    if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

// 4 child details
// 4.1 child name, sex, date
  router.get('/v2/no-informant/name-date-form', (req, res) => {
    res.render('child-details/name-date', { data: req.session.data });
  });

  router.post('/v2/no-informant/name-date-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.nameDateNICompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 4.2 place of stillbirth
  router.get('/v2/no-informant/place-of-stillbirth-form', (req, res) => {
    res.render('child-details/place-of-stillbirth', { data: req.session.data });
  });

  router.post('/v2/no-informant/place-of-stillbirth-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.placeNICompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });


    // 4.3 parents details
  router.get('/v2/no-informant/parents-details-form', (req, res) => {
    res.render('child-details/parents-details', { data: req.session.data });
  });

  router.post('/v2/no-informant/parents-details-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.parentsDetailsNICompleted = true;
    //res.redirect('../task-list.html');
      if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });





// 7. Submit the registration Cannot start yet (locked until confidential stats complete)
// 7.1 Registrars details
  router.get('/v2/no-informant/register-page-form', (req, res) => {
    res.render('submit/register-page', { data: req.session.data });
  });

  router.post('/v2/no-informant/register-page-form', (req, res) => {
    req.session.data = req.session.data || {};
    req.session.data.registerPageNICompleted = true;


// 🔍 Add this line to inspect session data
  

   // res.redirect('../task-list.html');
     if (req.session.data.checkAnswersNIVisited) {
    // If "Check your answers" has been visited, redirect back to it
    res.redirect('/v2/no-informant/submit/check-answers-page');
  } else {
    // Otherwise, redirect to the next page in the journey (Father's Name page)
    res.redirect('task-list.html');
  }
  });

  // 7.2 Check answers
// Route for the Check Your Answers page (GET request)
router.get('/v2/no-informant/submit/check-answers-page', (req, res) => {
  // Mark the "Check your answers" page as visited
  req.session.data = req.session.data || {};
  req.session.data.checkAnswersNIVisited = true;

// 🔍 Add this line to inspect session data
  console.log('check answers:', req.session.data);

  // Render the "Check your answers" page
  res.render('/v2/no-informant/submit/check-answers-page', { data: req.session.data });
});


  // router.get('/coroner-inquest/submit/check-answers-form', (req, res) => {
  //   res.render('coroner-inquest/submit/check-answers-page', { data: req.session.data });
  // });

  // router.post('/coroner-inquest/submit/check-answers-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   req.session.data.checkAnswersCompleted = true;
  //   res.redirect('../task-list.html');
  // });

//need this at the end:
};