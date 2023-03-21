import { Request, Response } from "express";
 

export const home = (req: Request, res: Response) => {
    console.log("bom dia")
    res.render("home", {
    banner: {
        id: "input",
       
    },
    information:"information",
        banne:{
            modal:"modal-container"
        },
    class: {
       clas :"container",
      
    }
    
})

}
export const exit = (req: Request, res: Response) => {
    res.render("home", {
        banne:{
            modal:"modal-container"
        },
        information:"information-div"
    })
    eval.length
}

export const camein = (req: Request, res: Response) => {

    res.send("oi")
}