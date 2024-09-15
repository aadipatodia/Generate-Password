import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import BouncyCheckbox from "react-native-bouncy-checkbox";

// Form validation
import * as Yup from 'yup'
import { Formik } from 'formik';
// YOUTUBE:
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(16, 'Should be max of 16 characters')
  .required('Length is required')
  
})
export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setupperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCaseChars
    }
    if (lowerCase) {
      characterList += lowerCaseChars
    }
    if (numbers) {
      characterList += digitChars
    }
    if (symbols) {
      characterList += specialChars
    }

    const passwordResult = createPassword(characterList, passwordLength )

    setPassword(passwordResult)
    setIsPassGenerated(true)
    
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
    console.log("hitesh");
    
  }

  const resetPasswordState = () => {
    setPassword('')
    setIsPassGenerated(false)
    setLowerCase(true)
    setupperCase(false)
    setNumbers(false)
    setSymbols(false)
    
    
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
       initialValues={{ passwordLength: '' }}
       validationSchema={PasswordSchema}
       onSubmit={ values => {
        console.log(values);
        generatePasswordString(+values.passwordLength) 
       }}
     >
       {({
         values,
         errors,
         touched,
         isValid,
         handleChange,
         handleSubmit,
         handleReset,
         /* and other goodies */
       }) => (
         <>
         <View style={styles.inputWrapper}>
          <View style={styles.inputColumn}>
            <Text style={styles.heading}>Password Length</Text>
            {touched.passwordLength && errors.passwordLength && (
              <Text style={styles.errorText}>
                {errors.passwordLength}
              </Text>
            )}
            
          </View>
          <TextInput
            style={styles.inputStyle}
            value={values.passwordLength}
            onChangeText={handleChange('passwordLength')}
            placeholder="Ex. 8"
            keyboardType='numeric'
            />
         </View>
         <View style={styles.inputWrapper}>
          <Text style={styles.heading}>Include lowercase</Text>
          <BouncyCheckbox
          disableBuiltInState
          isChecked={lowerCase}
          onPress={() => setLowerCase(!lowerCase)}
          fillColor="#29AB87"
          style={styles.bouncyBox1}
          />
         </View>
         <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Uppercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setupperCase(!upperCase)}
                    fillColor="#FED85D"
                    style={styles.bouncyBox2}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setNumbers(!numbers)}
                    fillColor="#C9A0DC"
                    style={styles.bouncyBox3}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setSymbols(!symbols)}
                    fillColor="#FC80A5"
                    style={styles.bouncyBox4}
                  />
                </View>
         <View style={styles.formActions}>
          <TouchableOpacity
          disabled={!isValid}
          style={styles.primaryBtn}
          onPress={handleSubmit}
          >
            <Text style={styles.primaryBtnTxt}>Generate Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.secondaryBtn}
          onPress={ () => {
            handleReset();
            resetPasswordState()
          }}
          >
            <Text style={styles.secondaryBtnTxt}>Reset</Text>
          </TouchableOpacity>
         </View>
         </>
       )}
          </Formik>
        </View>
        {isPassGenerated ? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            
          </View>
        ) : null}
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 100
  },
  formContainer: {
    margin: 8,
    padding: 8,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#fff'
  },
  subTitle: {
    fontSize: 30,
    fontWeight: '600',
    color: 'white'
  },
  description: {
    marginBottom: 8,
    color: 'white',
    fontSize: 20,
    fontWeight: '600'
  },
  heading: {
    fontSize: 25,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputColumn: {
    flexDirection: 'column',
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 140,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
    marginTop: 20
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20
  },
  secondaryBtn: {
    width: 140,
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
    marginTop: 20
  },
  secondaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
    marginTop: 5,
    fontSize: 24
  },
  card: {
    marginTop: 20,
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
    backgroundColor: 'orange'
  },
  cardElevated: {
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 42,
    textAlign: 'center',
    marginBottom: 12,
    color: 'white',
    fontWeight: 'bold'
  },
  bouncyBox4: {
    marginLeft: 87
  },
  bouncyBox3: {
    marginLeft: 80
  },
  bouncyBox2: {
    marginLeft: 63
  },
  bouncyBox1: {
    marginLeft: 67
  },

});
