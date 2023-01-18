export default function SliderItem({ title, subtitle, imageLink, buttonText }) {
  return (
    <View>
      <Image source={{ uri: imageLink }} />
      {subtitle && <Text>{subtitle}</Text>}
      <Text>{title}</Text>
      {buttonText && <Button title={'buttonText'}/>}
    </View>
  );
}
