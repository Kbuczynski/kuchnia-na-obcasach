import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
} from "@react-pdf/renderer";
import prettierTitle from "../../functions/prettierTitle";
import logo from "../../assets/avatar.jpg";
const htmlToText = require("html-to-text");

const PostPDF = ({ post }) => {
  Font.register({
    family: "Roboto",
    src:
      "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
  });

  const styles = StyleSheet.create({
    font: {
      fontFamily: "Roboto",
      padding: "25px",
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
    },
    img: {
      width: 50,
    },
    content: {
      fontSize: 8,
    },
  });

  const recipe = htmlToText.fromString(`${post.content.rendered}`, {
    ignoreHref: true,
    ignoreImage: true,
  });

  return (
    <Document
      title={prettierTitle(post.title.rendered)}
      author="Kuchnia na obcasach"
    >
      <Page size="A4" style={styles.font}>
        <View style={styles.title}>
          <Text>{prettierTitle(post.title.rendered)}</Text>
        </View>
        <View style={styles.content}>
          <Text>{recipe}</Text>
          <Image src={logo} style={styles.img} />
        </View>
      </Page>
    </Document>
  );
};

export default PostPDF;
