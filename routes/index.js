const express = require('express');
const testDb = require('../testDb/testDb')
const router = express.Router();

router.get('/', (req, res) => {
	res.render('index');
});

router.get('/philosophy', (req, res) => {
	res.render('phil');
});

router.get('/facility', (req, res) => {
	res.render('facility');
});

router.get('/training', (req, res) => {
	res.render('training');
});

router.get('/testimonials', (req, res) => {
	let pickedReviews = new Set()
	
	const randomNum = (reviews) => {
		return reviews[Math.floor(Math.random() * reviews.length)]
	}

	while (pickedReviews.size < 4) {
		let pick = randomNum(testDb)
		pickedReviews.add(pick)
	}

	res.render('testimonials', {
		reviews: pickedReviews
	});
});

router.get('/contact', (req, res) => {
	res.render('contact');
});

// external links

router.get('/instagram', (req, res) => {
	res.redirect('http://www.instagram.com')
})

router.get('/facebook', (req, res) => {
	res.redirect('http://www.facebook.com')
})

module.exports = router;