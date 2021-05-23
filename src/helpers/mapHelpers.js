import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";

export function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return(
        <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
            {value === index && (
                <div>
                    <Typography>{children}</Typography>
                </div>
            )}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export function a11yProps(index) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`
    };
}
