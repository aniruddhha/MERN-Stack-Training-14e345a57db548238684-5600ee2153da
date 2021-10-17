function DataApp() {
    return <div>
        <p className="alert alert-primary">
            First off, custom events don't play well with React components natively. So you cant just say in the render function, and have to think around the problem.
        </p>
    </div>
}

export default DataApp;