const express = require('express');
const router = express.Router();
//const jwt = require('jsonwebtoken');
const Authenticate = require('../middelware/authenticate');

const bcrypt = require('bcryptjs');
const multer = require('multer');

const userRegister = require('../model/registerSchema');
const Brand = require('../model/brand');
const Cart = require('../model/cart');
const Category = require('../model/category');
const Item = require('../model/item');
const Staff = require('../model/staff');

router.get('/', function (req, res) {
    res.send('hello')

});

// Register ----------------------------------->

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./upload/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
let upload = multer({ storage, fileFilter });

router.post('/signup', async (req, res) => {
    const { firstname, lastname, email, phone, password, confirmpassword } = req.body;

    if (!firstname || !lastname || !email || !phone || !password || !confirmpassword) {
        return res.status(422).json({ error: 'plz fill all fields' });
    }

    try {
        const useExist = await userRegister.findOne({ email: email })
        if (useExist) {
            return res.status(422).json({ error: 'email already exist' });
        }
        else if (password != confirmpassword) {
            return res.status(422).json({ error: 'pass are not matched' });
        }

        const user = new userRegister({ firstname, lastname, email, phone, password, confirmpassword });

        const userregister = await user.save();
        if (userregister) {
            res.status(201).json({ message: 'user registered sucessfully' });
        }
    } catch (err) {
        console.log(err);
    }
});

//  --------------------------------->  Register

// router.post('/contact', async (req, res) => {
//     console.log(req.body)
//     const { name, email, phone, message } = req.body;
//     if (!name || !email || !phone || !message) {
//         return res.status(422).json({ error: 'plss fill out all fields' })
//     }

//     try {
//         const contactuser = new userRegister({ name, email, phone, message })
//         const contactdetails = await contactuser.save()
//         if (contactdetails) {
//             res.status(201).json({ message: 'user registerd successfully' })
//         }

//     } catch (err) {
//         console.log(err)

//     }
// });


router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'pls fill the data' })
        }
        const userLogin = await userRegister.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken()
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 60000),
                httpOnly: true
            })
            if (!isMatch) {
                res.json({ error: "invalid credentials" });
            } else {
                res.json({ message: "user sign in succesfully" });
            }
        }
        else {
            res.json({ error: "invalid credentials" }) // question here 
        }
    }

    catch (err) {
        console.log(err)

    }
});


router.get('/userprofile', Authenticate, (req, res) => {
    // console.log("hello userprofile");
    res.send(req.rootUser);
});
router.get('/getdata', Authenticate, (req, res) => {
    // console.log("hello userprofile");
    res.send(req.rootUser);
});



// router.post('/contact', Authenticate, async (req, res) => {

//     try {
//         const { firstname, email, phone, message } = req.body;

//         if (!firstname || !email || !phone || !message) {
            
//             return res.status(422).json({ error: "Please fill all fields" });
//         }
//         const userContact = await userRegister.findOne({_id:req.userID });
//         if (userContact) {
//             const usermessage = await userContact.addMessage(firstname, email, phone, message)
//             await userContact.save();
//             res.status(201).json({ message: "user contcat successfully" });
//         }

//     } catch (err) {
//         console.log(err);
//     }
// });


router.post('/contact', Authenticate, async(req,res)=>{
    // console.log(req.body);
    // res.json({message:req.body});
    try{
       
        const { firstname,email,phone,message }=req.body;
        if(!firstname ||!email ||!phone ||!message){
            console.log("error in contact form")
            return res.json({error:"plz filled the contact form"});

        }
        const userContact= await userRegister.findOne({_id:req.userID});
        if(userContact){
            const usermessage= await userContact.addMessage(firstname,email,phone,message)
            await userContact.save();
            res.status(201).json({message:"user contact successfully"});
        }

    }catch(error){
        console.log(error);

    }
});

router.post('/cart', async (req, res) => {
    try {
      const { id, itemName, quantity, price } = req.body;
      const cartItem = new Cart({ id, itemName, quantity, price });
      await cartItem.save();
      res.status(201).json(cartItem);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add item to cart' });
    }
  });

 router.post('/brand', async (req, res) => {
  try {
    const { id, name, contractYears } = req.body;
    const brand = new Brand({ id, name, contractYears });
    await brand.save();
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add brand' });
  }
});
router.post('/category', async (req, res) => {
    try {
      const { id, name } = req.body;
      const category = new Category({ id, name });
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add category' });
    }
  });

  router.post('/item', async (req, res) => {
    try {
      const { id, name, category, price, brand } = req.body;
      const item = new Item({ id, name, category, price, brand });
      await item.save();
      res.status(201).json(item);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add item' });
    }
  });

  router.post('/staff', async (req, res) => {
    try {
      const { id, name, contactNo, address, region } = req.body;
      const staffMember = new Staff({ id, name, contactNo, address, region });
      await staffMember.save();
      res.status(201).json(staffMember);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add staff member' });
    }
  });

module.exports = router;