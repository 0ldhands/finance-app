import React from 'react'
import  { useState,useEffect} from "react";
import '../css/Home.css'

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: "Helvetica",
    flexDirection: "column",
    backgroundColor: "white",
  },
  table: {
    display: "table",
    width: "auto",
    margin: "10px 0",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "black",
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCell: {
    borderRightWidth: 1,
    borderColor: "#000",
    borderStyle: "dashed",
    padding: 5,
    flex: 1,
  },
  tableHeader: {
    backgroundColor: "grey",
    fontWeight: "bold",
  },
});

const MyDocument3 = ({ arr, username }) => {
  const [arrs, setArr] = useState([]);

useEffect(() => {
  const intervalId = setInterval(() => {
    setArr([...arr]);
  }, 1000);

  // Cleanup interval on unmount
  return () => clearInterval(intervalId);
}, [arr]); // Dependencies array makes sure this runs only when `arr` changes


  return (
    <Document>
      <Page style={styles.page}>
        <Text style={{ margin: "20px", fontWeight: 300, textAlign: "center" }}>
          Transactin Report
        </Text>
        <Text style={{ margin: "20px", fontWeight: "bold" }}>
          User Name:{username}
        </Text>
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>
              S.No.
            </Text>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>Name</Text>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>
              From Acc.NO.
            </Text>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>
              To.Acc.No.
            </Text>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>
              Payment
            </Text>
            <Text style={[styles.tableCell, { fontWeight: "bold" }]}>
              Amount
            </Text>
          </View>
          {arrs.map((v, i) => (
            <View style={styles.tableRow} key={i}>
              <Text style={styles.tableCell}>{i + 1}</Text>
              <Text style={styles.tableCell}>{v.name}</Text>
              <Text style={styles.tableCell}>{v.from}</Text>
              <Text style={styles.tableCell}>{v.to}</Text>
              <Text style={styles.tableCell}>{v.payment}</Text>
              <Text style={styles.tableCell}>{v.amount}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const Tragenerator = ({val,val4}) => {
  return (
    <div style={{margin:'5px'}}>
         <PDFDownloadLink
        document={<MyDocument3 arr={val} username={val4} />} // Pass the data to MyDocument
        fileName="report.pdf"
      >
        {({ loading }) =>
          loading ? "Loading document..." : <button className='re-btn'>Transaction Report</button>
        }
      </PDFDownloadLink>
    </div>
  )
}

export default Tragenerator