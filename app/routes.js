//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here
// Homepage – Advent Calendar
router.get('/', function (req, res) {
  const today = new Date();

  const currentYear = today.getFullYear();
  const currentDay = today.getDate();

  res.render('index', {
    currentYear,
    currentDay
  });
});
