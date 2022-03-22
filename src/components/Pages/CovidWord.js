import React, { useEffect, useMemo, useState } from "react";
import { sortBy } from "lodash";
import CountrySelector from "../CountrySelector";
import { getCountries, getReportByCountry } from "../axios/axiosClient";
import Summary from "../Summary";
import Highlight from "../Highlight";
import { Container, Typography } from "@material-ui/core";
import "@fontsource/roboto";
import moment from "moment";
import "moment/locale/vi";
import { RingLoader } from "react-spinners";

moment.locale("vi");

const Word = () => {
  const [countries, setCountries] = React.useState([]);
  const [selectedCountryId, setSelectedCountryId] = React.useState("");
  const [report, setReport] = React.useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      const countries = sortBy(data, "Country");
      setCountries(countries);
      setSelectedCountryId("vn");

      setLoading(false);
    });
  }, []);

  const handleOnChange = React.useCallback((e) => {
    setSelectedCountryId(e.target.value);
  }, []);

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      );
      getReportByCountry(selectedCountry.Slug).then((res) => {
        // remove last item = current date
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          title: "Tổng số ca nhiễm",
          count: latestData.Confirmed,
          type: "confirmed",
        },
        {
          title: "Khỏi",
          count: latestData.Recovered,
          type: "recovered",
        },
        {
          title: "Tử vong",
          count: latestData.Deaths,
          type: "death",
        },
      ];
    }
    return [];
  }, [report]);

  return loading ? (
    <div className="loading">
      <RingLoader color="#D78536" loading={loading} size={60} />
    </div>
  ) : (
    <>
      <Container style={{ marginTop: 50, marginBottom: 100 }}>
        <Typography variant="h3" component="h3">
          Số liệu COVID-19 thế giới
        </Typography>
        <Typography>{moment().format("LLL")}</Typography>
        <CountrySelector
          handleOnChange={handleOnChange}
          countries={countries}
          value={selectedCountryId}
        />
        <Highlight summary={summary} />
        <Summary countryId={selectedCountryId} report={report} />
      </Container>
    </>
  );
};

export default Word;
