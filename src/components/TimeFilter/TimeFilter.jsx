import Form from 'react-bootstrap/Form'
import InputGroup from "react-bootstrap/InputGroup";
import {Button} from "react-bootstrap";
import {Fragment, useState} from "react";
import PropTypes from "prop-types"
import {DatePicker} from 'rsuite'
// import {loadConfigFromFile} from "vite";

const TimeFilter = ({onTimeFrame}) => {
    const [from, setFrom] = useState(null)
    const [to, setTo] = useState(null)

    const handleChangeFrom = (date) =>{
        setFrom(date)
    }

    const handleChangeTo = (date) => {
        setFrom(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!from  || !to) return;

        const fromHours = from.getHours()
        const toHours = to.getHours()

        onTimeFrame([fromHours, toHours])
        setFrom(null)
        setTo(null)
    }

    return(
        <Fragment>
            <Form onSubmit={handleSubmit}>
                {/* what is mb-3 ? */}
                {/*<InputGroup className={mb-3}>*/}
                <InputGroup>
                    <Button className="my-custom-button" type={'submit'}>
                        Apply Time Frame
                    </Button>

                    <DatePicker
                        className={'my-custom-time-picker right'}
                        format="HH"
                        value={to}
                        onChange={handleChangeTo}
                        />
                </InputGroup>
            </Form>
        </Fragment>
    )
}

export default TimeFilter;
