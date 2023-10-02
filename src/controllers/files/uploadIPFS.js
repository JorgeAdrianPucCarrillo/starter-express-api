
// Check if we're using pinata, or other IPFS storage service
const uploadIPFS = async (req, res) => {
    try {
        return res.status(200).json({
            ok: true,
            message: "File uploaded",
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error uploading file",
        })
    }

}

export default uploadIPFS