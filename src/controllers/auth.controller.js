const login = (req, res) => {
    res.send(req.user)
}

export { login };