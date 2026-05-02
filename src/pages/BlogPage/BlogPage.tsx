import { Button, Divider, Paper, Typography } from "@mui/material";
import type { Posts } from "../../services/Posts";
import "./BlogPage.css";
import { Link } from "react-router-dom";
import type { JSX } from "react";

function BlogPage(posts: {
  blogItems: Array<Partial<Posts> & { id: string }>;
}): JSX.Element {
  return (
    <div className="mainContainer" style={{
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
    }}>
      <Paper elevation={3} style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h2" className="header">
          Blog Posts
        </Typography>
      </Paper>
      <table className="tableContainer">
        <tbody>
          {Array.from(posts.blogItems).map((item) => {
            return (
              <tr key={item.id}>
                <td key={item.id} className="sidebar">
                  <Typography variant="body2">{item.id}</Typography>
                </td>
                <Divider variant="inset" />
                <th key={item.title} className="main">
                  <Typography variant="h5">{item.title}</Typography>
                </th>
                <Divider variant="inset" />
                <td
                  key={item.id}
                  className="link"
                  style={{
                    border: "none",
                  }}
                >
                  <Button variant="outlined" size="small">
                    <Link to={`/blog/${item.id}`}>View</Link>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default BlogPage;
