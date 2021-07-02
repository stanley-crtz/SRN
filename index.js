import App from "./App.js";
import { connect } from "./Backend/Config.js";

const PORT = process.env.PORT || 4000;

connect.connect(err => {
    if (err) {
        console.log(err)
    }
    else {
        App.listen(PORT, () => console.log(`App listening in port ${PORT}`));
    }
})
