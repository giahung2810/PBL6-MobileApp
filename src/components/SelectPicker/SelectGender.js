import RNPickerSelect from 'react-native-picker-select';
export const SelectGender = ({setValue}) => {
    return (
        <RNPickerSelect
            onValueChange={(value) => { setValue(value)}}
            items={[
                { label: 'Male', value: 'male' },
                { label: 'Female', value: 'female' },
                { label: 'Other', value: 'other' },
            ]}
            placeholder={{
                label: 'Gender',
                value: null,
            }}
            textInputProps={{ fontSize: 16,
        }}
        />
    );
};