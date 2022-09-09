import { useState } from 'react';
import { Text, View, Switch } from 'react-native';
import { darkTheme, lightTheme } from './Styles';

export default function App() {

  // isEnabled hallitsee switchin on/off tilaa
  // false = switch starting point is off, true = switch starting point is on
  const [isEnabled, setIsEnabled] = useState(false);
  
  // luodaan muuttuja jolla on funktio vaihtaa isEnabled muuttujan arvo
  // prev => !prev --> aikaisempi arvo muutetaan aikaisemman arvon vastakohdaksi
  const toggleSwitch = () => setIsEnabled(prev => !prev)

  const theme = (isEnabled === true) ? darkTheme : lightTheme;
  // voidaan kirjoittaa myös const theme = isEnabled ? darkTheme : lightTheme;
  // ensimmäinen kohta etsii true arvoa


  return (
    <View style={theme.container}>
      <View style={theme.fields}>
        <Text style={theme.label}>Dark Mode</Text>
        <Switch
          value={isEnabled} //kertoo mikä arvo togglella on
          onValueChange={toggleSwitch} // mitä tapahtuu kun togglea painetaan, kun siinä muutetaan arvo?
          /* toggleSwitch funktio aktivoituu, ja se vaihtaa setIsEnabled muuttujaan vastakkaisen 
            arvon eli true, toggle on nyt on-asennossa 
            toggleSwitch funktio lähettää vastauksen setIsEnabled-funktioon, 
            joka muuttaa isEnabled muuttujan tilan */
          />
      </View>
    </View>
  );
}


