// startdb.bat

docker-compose up -d

timeout /t 10 /nobreak

```bash
docker exec -it mongo-one-db mongosh --eval "rs.initiate({_id:'dbrs', members: [{_id:0, host: 'mongo-one-db'},{_id:1, host: 'mongo-two-db'},{_id:2, host: 'mongo-three-db'}]})"
```

```bash
docker exec -it mongo-one-db mongosh --eval "rs.status()"
```

If your replicaset was successfully initiated, you would recieve a response as following.

```
{
  set: 'dbrs',
  date: ISODate("2023-08-28T14:23:18.138Z"),
  myState: 1,
  term: Long("1"),
  syncSourceHost: '',
  syncSourceId: -1,
  heartbeatIntervalMillis: Long("2000"),
  majorityVoteCount: 2,
  writeMajorityCount: 2,
  votingMembersCount: 3,
  writableVotingMembersCount: 3,
  optimes: {
    lastCommittedOpTime: { ts: Timestamp({ t: 1693232580, i: 1 }), t: Long("1") },
    lastCommittedWallTime: ISODate("2023-08-28T14:23:00.867Z"),
    readConcernMajorityOpTime: { ts: Timestamp({ t: 1693232580, i: 1 }), t: Long("1") },
    appliedOpTime: { ts: Timestamp({ t: 1693232580, i: 1 }), t: Long("1") },
    durableOpTime: { ts: Timestamp({ t: 1693232580, i: 1 }), t: Long("1") },
    lastAppliedWallTime: ISODate("2023-08-28T14:23:00.867Z"),
    lastDurableWallTime: ISODate("2023-08-28T14:23:00.867Z")
  },
  lastStableRecoveryTimestamp: Timestamp({ t: 1693232552, i: 1 }),
  electionCandidateMetrics: {
    lastElectionReason: 'electionTimeout',
    lastElectionDate: ISODate("2023-08-28T14:22:44.719Z"),
    electionTerm: Long("1"),
    lastCommittedOpTimeAtElection: { ts: Timestamp({ t: 1693232552, i: 1 }), t: Long("-1") },
    lastSeenOpTimeAtElection: { ts: Timestamp({ t: 1693232552, i: 1 }), t: Long("-1") },
    numVotesNeeded: 2,
    priorityAtElection: 1,
    electionTimeoutMillis: Long("10000"),
    numCatchUpOps: Long("0"),
    newTermStartDate: ISODate("2023-08-28T14:22:47.581Z"),
    wMajorityWriteAvailabilityDate: ISODate("2023-08-28T14:22:52.627Z")
  },
  members: [
    {
      _id: 0,
      name: 'mongo-one-db:27017',
      health: 1,
      state: 1,
      stateStr: 'PRIMARY',
      uptime: 107,
      optime: { ts: Timestamp({ t: 1693232580, i: 1 }), t: Long("1") },
      optimeDate: ISODate("2023-08-28T14:23:00.000Z"),
      lastAppliedWallTime: ISODate("2023-08-28T14:23:00.867Z"),
      lastDurableWallTime: ISODate("2023-08-28T14:23:00.867Z"),
      syncSourceHost: '',
      syncSourceId: -1,
      infoMessage: 'Could not find member to sync from',
      electionTime: Timestamp({ t: 1693232564, i: 1 }),
      electionDate: ISODate("2023-08-28T14:22:44.000Z"),
      configVersion: 1,
      configTerm: 1,
      self: true,
      lastHeartbeatMessage: ''
    },
    {
      _id: 1,
      name: 'mongo-two-db:27017',
      health: 1,
      state: 2,
      stateStr: 'SECONDARY',
      uptime: 44,
      optime: { ts: Timestamp({ t: 1693232580, i: 1 }), t: Long("1") },
      optimeDurable: { ts: Timestamp({ t: 1693232580, i: 1 }), t: Long("1") },
      optimeDate: ISODate("2023-08-28T14:23:00.000Z"),
      optimeDurableDate: ISODate("2023-08-28T14:23:00.000Z"),
      lastAppliedWallTime: ISODate("2023-08-28T14:23:00.867Z"),
      lastDurableWallTime: ISODate("2023-08-28T14:23:00.867Z"),
      lastHeartbeat: ISODate("2023-08-28T14:23:16.973Z"),
      lastHeartbeatRecv: ISODate("2023-08-28T14:23:18.136Z"),
      pingMs: Long("0"),
      lastHeartbeatMessage: '',
      syncSourceHost: 'mongo-one-db:27017',
      syncSourceId: 0,
      infoMessage: '',
      configVersion: 1,
      configTerm: 1
    },
    {
      _id: 2,
      name: 'mongo-three-db:27017',
      health: 1,
      state: 2,
      stateStr: 'SECONDARY',
      uptime: 44,
      optime: { ts: Timestamp({ t: 1693232580, i: 1 }), t: Long("1") },
      optimeDurable: { ts: Timestamp({ t: 1693232580, i: 1 }), t: Long("1") },
      optimeDate: ISODate("2023-08-28T14:23:00.000Z"),
      optimeDurableDate: ISODate("2023-08-28T14:23:00.000Z"),
      lastAppliedWallTime: ISODate("2023-08-28T14:23:00.867Z"),
      lastDurableWallTime: ISODate("2023-08-28T14:23:00.867Z"),
      lastHeartbeat: ISODate("2023-08-28T14:23:16.973Z"),
      lastHeartbeatRecv: ISODate("2023-08-28T14:23:17.514Z"),
      pingMs: Long("0"),
      lastHeartbeatMessage: '',
      syncSourceHost: 'mongo-one-db:27017',
      syncSourceId: 0,
      infoMessage: '',
      configVersion: 1,
      configTerm: 1
    }
  ],
  ok: 1,
  '$clusterTime': {
    clusterTime: Timestamp({ t: 1693232580, i: 1 }),
    signature: {
      hash: Binary(Buffer.from("0000000000000000000000000000000000000000", "hex"), 0),
      keyId: Long("0")
    }
  },
  operationTime: Timestamp({ t: 1693232580, i: 1 })
}

```

FROM: https://bytelanguage.com/2023/02/13/create-mongo-replicaset-using-docker-compose/
