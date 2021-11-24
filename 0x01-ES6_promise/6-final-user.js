import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const personName = signUpUser(firstName, lastName);
  const personPic = uploadPhoto(fileName);

  const data = await Promise.allSettled([personName, personPic])
    .then((response) => response.map((response) => {
      if (response.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: response.reason.toString(),
        };
      }
      return response;
    }));
  return Promise.resolve(data);
}
