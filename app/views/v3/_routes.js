module.exports = function(router) {
  

// Name and date


// router.get('/v3/child-details/name-date', (req, res) => {
//   res.sendFile(path.join(__dirname, 'child-details', 'name-date.html'));
// });

  // TASK LIST
  // router.get('/v3/informant/task-list-form', (req, res) => {
  //   req.session.data = req.session.data || {};
  //   res.render('task-list', { data: req.session.data });
  // });

router.post('/v3/task-list-form', function (req, res) {

   // Log the submitted form data
  console.log('Form submission:', req.body);
  // Ensure session data exists
  req.session.data = req.session.data || {};
  // Save the selected radio button values to the session
  const selectedOption = req.body.userMedicalInfoSource;
 
   //console.log('Selected option:', selectedOption);
  req.session.data['whoIsInformantMD'] = selectedOption;
  // Redirect based on the selected option
  if (selectedOption === '1-informant' || selectedOption === '2-cn2-with-inf' || selectedOption === '4-informant') {
    res.redirect('informant/informant-triage/01-who-is-informant');
  } else if (selectedOption === '3-inquest-no-inf') {
    res.redirect('no-informant/task-list');
  } else {
    // Handle unexpected values (optional)
    res.redirect('informant/informant-triage/01-who-is-informant'); // Redirect back to the form if no valid option is selected
  }
});

// Route for the informant task list
router.get('/v3/informant/task-list-inf-form', function (req, res) {
  res.render('informant/task-list', {
    userMedicalInfoSource: req.session.data['userMedicalInfoSource'],
    
  });
});

// Route for the no-informant task list
router.get('/v3/no-informant/task-list-noi-form', function (req, res) {
  res.render('no-informant/task-list', {
    userMedicalInfoSource: req.session.data['userMedicalInfoSource'],
   
  });
});




//need this at the end:
};