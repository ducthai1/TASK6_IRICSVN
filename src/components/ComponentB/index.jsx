import './index.module.scss';

export default function ComponentB({ filteredLinks, clickTarget }) {
    const handleClick = (link) => {
        clickTarget(link)
    }

    return (
        <div>
            <h2 style={{ color: "#f9d205", textAlign: "center", fontSize: "28px", margin: "0" }}>Danh sách các liên kết hợp lệ đã nhập:</h2>
            <ul style={{ color: "white" }}>
                {filteredLinks.slice().reverse().map((link, index) => (
                    <li style={{ userSelect: "none" }} key={index} onClick={() => handleClick(link)} >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">{link.title}</a>
                        <p>{link}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
