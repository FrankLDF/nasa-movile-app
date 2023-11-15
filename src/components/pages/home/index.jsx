import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { format, sub } from "date-fns";

import api from "../../../utils/api";
import TodaysImage from "../../molecules/todays-image";
import LastFiveDaysImages from "../../organisms/last-five-days";
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
      loadLast5DaysImage().catch(null);
  }, []);
  return (
      <View>
          <Text style={styles.texto}>By Frank 2021-0226 and</Text>
          <Text style={styles.texto}>Enmanuel 2021-0618 and</Text>
          <Text style={styles.texto}>Home</Text>
      <Header />
          <TodaysImage {...todaysImage} />
          <LastFiveDaysImages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    },
    texto: {
        color: '#fff',
        textAlign: 'center',
        fontWeight:'bold'
    }
});
