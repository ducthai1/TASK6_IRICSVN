

export default function ComponentC({ selectedLink }) {
    return (
        <>
            <h2 style={{ color: "#f9d205", textAlign: "center", fontSize: "28px", margin: "20px 0" }}>Nội dung liên kết đã chọn:</h2>
            <div style={{ height: "740px", display: "flex", justifyContent: "center", alignItems: "center", paddingBottom: "20px", fontWeight: "bold" }}>
                {selectedLink ? (
                    <iframe
                        style={{ backgroundColor: "#5b5b5b", borderRadius: "20px" }}
                        title="Embedded Content"
                        src={selectedLink}
                        width="25%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                    />
                ) : (
                    <p style={{ color: "red", textAlign: "center", fontSize: "22px", margin: "0", alignSelf: "flex-start" }}>Chọn một liên kết từ danh sách để hiển thị nội dung</p>
                )}
            </div>
        </>
    );
}
