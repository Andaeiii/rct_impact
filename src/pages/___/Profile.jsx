import React from 'react';
import * as Krypto from '../utils/Krypto';
import * as config from '../config/Settings';

const Profile = () => {

  let encoded = Krypto.encrypt(JSON.stringify({ name: 'aminu mohd', age: 24 }), config.PSSTRING);
  console.log(encoded);


  let data = 'r1heT6LCdXiEb9sT2Nd9/HyacEDXGwjmKE43BwQTm/bUhP/xbH3TeRcYa198XKgOFEm26HzyBu2D+Gt4ZyE3otj8/LvqBooG/bjTvB4o8bK8RckLhkUDYNgKKGdH4Y4TMllZIj7EzMfW3BsrGz6rsU83aB1VVzL9VKuwk9hiP7kAUHK76zk6ZcF+naFbpSqMM1mOTBZr5ussFymeZFmQNRStzNhd/oNQO318uYColQARlYRNlNWtHWKfZlg7XzOSPnfkjvDKh4hhophxDAsERNANeTqQlxi8izaqSK2xosjh522/stNIfN/aae3uOUejkHteMAPvF2SpfnLXyyigXiUafDh/kw1p7VAXi3O54j8baiIrbYaVb+aoeHTdlQ6/6QlqiZAj8jtBoKHH3cpceB+vBwlFLjO9BDmLRvs6RcJ2MKq28VPbvCIKVg0kKo+SEdgazz08q1YUOpDkanyDi828zO0AIDGWKEF+KPrNcv7+hCabD+TEC62x3/o4ONPY86wnwu3lznY2nanqh+2JVfDTOcNe4S7ebcgjs+9JFNZSW3eBKRnLxcaDhVxN+kv4wnajSYSig3lOSFXfuumFbGkRNwlUfHMUHmEeXCsgAuYxGjZxPizvSXGjersVqiis7IU1I35UOyMJxTfB9ME3g3HV4oOICJZAjlWZKKzCy3XECZY/Aev2JT0JhZiGMwryciI6g43F8trccKulUNCFEwEEr5ifmiCkqNWYCzYdvcSwPm4DRT65XR2gs2EEWmqTCfwiN92UdUDNgDIt5dKTtGWj+u4SQ1alyW/bE1o0HNhv76BdHtFGXaojt6gkkgCy0FLBJ8GA6WU2WPgYhFaGBA==';


  console.log('decrypted', Krypto.decrypt(data, config.PSSTRING));


  return (
    <div>Profile</div>
  )
}

export default Profile;