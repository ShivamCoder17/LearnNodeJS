class AppController{

    async welcome(req,res){
        try {
            let stu=["Shivam","Krishna","Shilpa","Maruti","Janana"];
            let user = {
                gender: "male",
                name: "Shivam"
            }
            // res.send("Hello Shiv!");
            res.render('welcome',{
                title:"Practice EJS",
                stu,
                user
            })
        } catch (error) {
            throw error;
        }
    }

    async aboutUs(req,res){
        try {
            let app_data = {
                version: "1.0.2",
                name: "THESG"
            }
            res.render('about-us',{
                title:"About Us",
                app_data
            })
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new AppController();