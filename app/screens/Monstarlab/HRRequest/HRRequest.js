import React, {useState} from 'react';
import {StyleSheet, Text, Image, View, TextInput, Modal, ScrollView, TouchableOpacity} from 'react-native';
import TopBar from '../../../components/TopBar';
import { firebase } from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import axios from '../../../axios';

const HRRequest = () => {
  const user = useSelector(state => state.auth.currentUser);

  const [btnSubmitDisabled, setBtnSubmitDisabled] = useState(false);

  const [email, setEmail] = useState('');
  const [requestor, setRequestor] = useState('');
  const [department, setDepartment] = useState('');
  const [classification, setClassification] = useState('');
  const [type, setType] = useState('');
  const [purpose, setPurpose] = useState('');
  const [details, setDetails] = useState('');
  const [coaEmpName, setCoaEmpName] = useState('');
  const [coaCurrentApprover, setCoaCurrentApprover] = useState('');
  const [coaProjectName, setCoaProjectName] = useState('');
  const [coaNewApproverApprover, setCoaNewApproverApprover] = useState('');
  const [coaEffectiveDate, setCoaEffectiveDate] = useState('');

  const submitHandler = async () => {
      let data = {
          email, requestor, department, classification, type, purpose, details, coaEmpName, coaCurrentApprover, coaProjectName, coaNewApproverApprover, coaEffectiveDate
      };
      console.log(data);
       axios.post('/reports', {
            ...data
       }).then(() => {
           console.log("Submitted successfully");
       }).catch((e) => {
           console.log("There is something wrong with the inputs!");
       })
  };

  return (
    <ScrollView>
      <TopBar />
      <Text style={styles.title}>HR REQUEST FORM</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
         style={styles.textInput}
         onChangeText={setEmail}
         value={email}
         placeholder="Your email"
      />

      <Text style={styles.label}>Requestor</Text>
      <TextInput
         style={styles.textInput}
         onChangeText={setRequestor}
         value={requestor}
         placeholder="Your answer"
      />

      <Text style={styles.label}>Department</Text>
      <View style={styles.picker}>
        <Picker
            selectedValue={department}
            onValueChange={(itemValue, itemIndex) =>
              setDepartment(itemValue)
            }>
            <Picker.Item label="Operations" value="Operations" />
            <Picker.Item label="Support" value="Support" />
        </Picker>
      </View>

      <Text style={styles.label}>Request Classification</Text>
      <View style={styles.picker}>
          <Picker
              selectedValue={classification}
              onValueChange={(itemValue, itemIndex) =>
                setClassification(itemValue)
              }>
              <Picker.Item label="Document" value="Document" />
              <Picker.Item label="HRMS-Related" value="HRMS-Related" />
              <Picker.Item label="Government Mandated Benefits-Related" value="Government Mandated Benefits-Related" />
              <Picker.Item label="Weremote Co-working" value="Weremote Co-working" />
          </Picker>
      </View>

      <Text style={styles.label}>Type</Text>
      <View style={styles.picker}>
         <Picker
            selectedValue={type}
            onValueChange={(itemValue, itemIndex) =>
              setType(itemValue)
            }>
            <Picker.Item label="Document - COE" value="Document - COE" />
            <Picker.Item label="Document - LOA" value="Document - LOA" />
            <Picker.Item label="Personal Information Update" value="Personal Information Update" />
            <Picker.Item label="HRMS - Change of Approver (For PM use ONLY Please proceed filling up section for Change of Approver)" value="HRMS - Change of Approver" />
            <Picker.Item label="HRMS - TDF" value="HRMS - TDF" />
            <Picker.Item label="HRMS - Incorrect filing/Cancellation of leave" value="HRMS - Incorrect filing/Cancellation of leave" />
            <Picker.Item label="Government Mandated Benefits - SSS" value="Government Mandated Benefits - SSS" />
            <Picker.Item label="Government Mandated Benefits - PagIbig/HDMF" value="Government Mandated Benefits - PagIbig/HDMF" />
            <Picker.Item label="Government Mandated Benefits - Philhealth" value="Government Mandated Benefits - Philhealth" />
            <Picker.Item label="Co-working Weremote (Please indicate the schedule on Request Details)" value="Co-working Weremote" />
         </Picker>
      </View>

      <Text style={styles.label}>Purpose of Request</Text>
      <TextInput
         style={styles.textInput}
         onChangeText={setPurpose}
         value={purpose}
         placeholder="Your answer"
      />

      <Text style={styles.label}>Request Details</Text>
      <TextInput
         style={styles.textInput}
         onChangeText={setDetails}
         value={details}
         placeholder="Your answer"
      />

      <Text style={styles.label}>Change of Approver - Name of Employee (For PM use ONLY)</Text>
      <TextInput
         style={styles.textInput}
         onChangeText={setCoaEmpName}
         value={coaEmpName}
         placeholder="Your answer"
      />

      <Text style={styles.label}>Change of Approver - Current Approver (For PM use ONLY)</Text>
      <TextInput
         style={styles.textInput}
         onChangeText={setCoaCurrentApprover}
         value={coaCurrentApprover}
         placeholder="Your answer"
      />

      <Text style={styles.label}>Change of Approver - Project Name (For PM use ONLY)</Text>
      <TextInput
         style={styles.textInput}
         onChangeText={setCoaProjectName}
         value={coaProjectName}
         placeholder="Your answer"
      />

      <Text style={styles.label}>Change of Approver - New Approver Approver (For PM use ONLY)</Text>
      <TextInput
         style={styles.textInput}
         onChangeText={setCoaNewApproverApprover}
         value={coaNewApproverApprover}
         placeholder="Your answer"
      />

      <Text style={styles.label}>Change of Approver - Effective Date (For PM use ONLY)</Text>
      <TextInput
         style={styles.textInput}
         onChangeText={setCoaEffectiveDate}
         value={coaEffectiveDate}
         placeholder="Your answer"
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitHandler}
        disabled={btnSubmitDisabled}>
        <Text style={styles.submit}>
          {!btnSubmitDisabled ? 'Submit' : 'Please wait...'}
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default HRRequest;

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 30,
        marginTop: 30
    },
    label: {
        width: '90%',
        alignSelf: 'center',
        color: 'black',
        fontSize: 16,
    },
    textInput: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20,
        paddingLeft: 5,
    },
    button: {
        backgroundColor: '#FFFF00',
        paddingHorizontal: 25,
        paddingVertical: 7,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        width: '90%'
    },
    picker: {
        alignSelf: 'center',
        width: '90%',
        backgroundColor: 'white',
        marginBottom: 20
    },
    submit: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18,
      },
    submitButton: {
        backgroundColor: '#FFFF00',
        paddingHorizontal: 25,
        paddingVertical: 7,
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
});