
// Check if we're using S3, or other storage service
const uploadFileController = async (req, res) => {
    try {
        return res.status(200).json({
            ok: true,
            message: "Implement UPLOAD FILE"
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            message: "Error uploading file"
        })
    }
}

export default uploadFileController