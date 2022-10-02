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
import { splitToSubstrings } from "../../functions/splitToSubstrings";
const htmlToText = require("html-to-text");

const PostPDF = ({ post }) => {
  Font.register({
    family: "Roboto",
    src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf",
  });

  const styles = StyleSheet.create({
    font: {
      fontFamily: "Roboto",
      padding: "25px",
    },
    title: {
      fontSize: 20,
      marginBottom: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    img: {
      width: 50,
      marginRight: "20px",
    },
    content: {
      fontSize: 8,
    },
    footer: {
      fontSize: 10,
      marginTop: "30px",
      flexDirection: "row",
      justifyContent: "center",
    },
  });

  const recipe = htmlToText.fromString(`${post.content.rendered}`, {
    ignoreHref: true,
    ignoreImage: true,
  });

  const recipeParts = splitToSubstrings(recipe, 2000);

  return (
    <Document
      title={prettierTitle(post.title.rendered)}
      author="Kuchnia na obcasach"
    >
      {recipeParts.map((recipePart, idx) => (
        <Page size="A4" style={styles.font} key={idx}>
          {!idx && (
            <View style={styles.title}>
              <Image src={logo} style={styles.img} />
              <Text>{prettierTitle(post.title.rendered)}</Text>
            </View>
          )}
          <View style={styles.content}>
            <Text>{recipePart}</Text>
          </View>
          <View style={styles.footer}>
            <Text>
              Strona {idx + 1}/{recipeParts.length}
            </Text>
          </View>
        </Page>
      ))}
    </Document>
  );
};

export default PostPDF;
