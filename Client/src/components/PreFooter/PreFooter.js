import React, { useState } from "react";
import bg7 from "assets/img/bg7.jpg";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import InputAdornment from "@material-ui/core/InputAdornment";
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui icons
import Mail from "@material-ui/icons/Mail";
import styles from "assets/jss/material-kit-pro-react/views/componentsSections/preFooter.js";

const useStyles = makeStyles(styles);

export default function PreFooter() {
  const classes = useStyles();
  const [value, setValue] = useState("");

  const sendMail = () => {
    let val = (document.getElementById('emailPreFooter')).value;
    const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    emailRegex.test(val) && console.log(val.toLowerCase());
  }

  // onSubmit() {
  //   let form = this.contactForm.value;
  //   const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
  //   if (form.fullName !== "" && form.email !== "" && form.subject !== "" && form.message !== "") {
  //     if (emailRegex.test(form.email)) {
  //       form.email = form.email.toLowerCase();
  //       // here i send the mail
  //       try {
  //         const newContact = firebase.functions().httpsCallable("newContact");
  //         const result = newContact(form);
  //         this.firebaseService.createMessage(form).then(
  //           res => {
  //             console.log(form, "formValue");
  //           }
  //         )
  //         console.log(result);          
  //       } catch (error) {
  //         console.log();
  //       }
  //       this.confirmSub('Your message has been sent. We will contact you very shortly', '#fff', '#000', true);
        
  //     } else {
  //       this.confirmSub('Ilegal email address, please type again.', '#ff4b4bf2', '#fff', false);
  //     }
  //   } else {
  //     this.confirmSub('Please fill all the fields.', '#ff4b4bf2', '#fff', false);
  //   }
  // }

  return (
    <div
      className={classNames(classes.subscribeLine, classes.subscribeLineImage)}
      style={{ backgroundImage: `url(${bg7})` }}
    >
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={6}
            md={6}
            className={classNames(classes.mlAuto, classes.mrAuto)}
          >
            <div className={classes.textCenter}>
              <h3 className={classes.title}>הירשם לניוזלטר שלנו</h3>
              <p className={classes.description}>
                מבצעים, מוצרים חדשים ומכירות. ישירות לתיבת הדואר הנכנס שלך
              </p>
            </div>
            <Card raised className={classes.card}>
              <CardBody className={classes.cardBody}>
                <form style={{ direction: "rtl" }}>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6} lg={8}>
                      <CustomInput
                        onChange={e => setValue(e.target.value)}
                        id="emailPreFooter"
                        formControlProps={{
                          fullWidth: true,
                          className: classes.cardForm,
                        }}
                        inputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Mail />
                            </InputAdornment>
                          ),
                          placeholder: 'הדוא"ל שלך',
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6} lg={4}>
                      <Button
                        onClick={sendMail}
                        color="primary"
                        block
                        className={classes.subscribeButton}
                      >
                        הירשם
                      </Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
