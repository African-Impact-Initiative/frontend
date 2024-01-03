import ComposeLayout2 from '../../layout/InternalLayout2'

/**
 * this is an HOC that renders the UnAuth Internal Layout components of the application
 * passing the required components as a props to the child.
 * @function
 * @param {object}  component - dashboard component.
 * @return {HTMLElement}
 */

const ComposeInternalLayout2 = (Component) => (passThroughProps) =>
    (
        <>
            <ComposeLayout2 {...passThroughProps}>
                {Component}
            </ComposeLayout2>
        </>
    )

export default ComposeInternalLayout2
