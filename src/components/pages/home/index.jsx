import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { format, sub } from "date-fns";

import api from "../../../utils/api";
import TodaysImage from "../../molecules/todays-image";
import Header from "../../molecules/header";

export default function Home() {
  const [todaysImage, setTodaysImage] = useState();
  const [lastFiveDaysImage, setLastFiveDaysImage] = useState();

  useEffect(() => {
    const lodTodaysImage = async () => {
      try {
        const todaysImageResponse = await api();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage(undefined);
      }
    };

    const loadLast5DaysImage = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const lastFiveDaysImageResponse = await api(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );
        setLastFiveDaysImage(lastFiveDaysImageResponse);
      } catch (error) {
        console.log(error);
        setLastFiveDaysImage(undefined);
      }
    };

    lodTodaysImage().catch(null);
  }, []);
  return (
    <View>
      <Header />
      <TodaysImage {...todaysImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
