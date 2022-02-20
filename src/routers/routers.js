const express = require('express');
const router = express.Router();
const supabase = require('../supabaseClient');

router.get('/UserProfile', (req, res) => {
    const userData = supabase.auth.user();

    const emailJSON = JSON.stringify(userData.email);
    const userJSON = JSON.stringify(userData.user_metadata.first_name + ' ' + userData.user_metadata.last_name);

    const email = emailJSON.replace(/['"]+/g, '');
    const user = userJSON.replace(/['"]+/g, '');

    res.render('UserProfile', {user, email});
});

router.get('/SignUp', (req, res) => {
    res.render('SignUp');
})

router.post('/SignUp', async (req, res) => {
    const {first_name, last_name, email, password} = req.body;

    try {
        const { user, session, error } = await supabase.auth.signUp(
            {
              email,
              password,
            },
            {
              data: { 
                first_name, 
                last_name,
              }
            }
          )

        if (error) throw error;

        res.send('<script>alert("Check You Email For Verification")</script>')
    } catch (error) {
        console.error(error);
    }
})

router.get('/SignIn', (req, res) => {
    const session = supabase.auth.session()
    
    session !== null ? res.redirect('/UserArea') : res.render('SignIn');
})

router.post('/SignIn', async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const { user, session, error } = await supabase.auth.signIn({
            email,
            password,
        })

        if (error) throw error;
        
        session !== null ? res.redirect('/UserProfile') : res.render('SignIn');

        console.log('Signed In');
    } catch (error) {
        console.error(error);
    }

})

router.get('/SignOut', async (req, res) => {
    const { error } = await supabase.auth.signOut();
    res.redirect('/SignIn');
})

module.exports = router;