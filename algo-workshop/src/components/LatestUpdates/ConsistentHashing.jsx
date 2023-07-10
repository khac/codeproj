import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Body = (
    <Typography variant="body2">
            <ul>
                <li>
                    The Ring Structure:
                    In consistent hashing, the hash ring is divided into multiple virtual buckets or slots. Each node in the system is assigned one or more slots, and data is mapped to these slots based on their hash values. The hash function used in consistent hashing is designed to produce a uniform distribution of hash values across the ring.
                </li>
                <li>
                    Data Placement:
                    When data needs to be stored or retrieved, it is first hashed using the same hash function. The resulting hash value is then mapped onto the ring. Starting from that point on the ring, data is assigned to the first node encountered in a clockwise direction. The node responsible for storing the data is determined by finding the next available slot after the hash value.
                </li>
                <li>
                    Adding or Removing Nodes:
                    One of the significant advantages of consistent hashing is its ability to handle node additions or removals with minimal data redistribution. When a node is added to the system, only a fraction of the data needs to be remapped, as it affects only the adjacent slots on the ring. Similarly, when a node is removed, the data stored on that node is evenly redistributed among the remaining nodes, reducing the impact on the overall system.
                </li>
                <li>
                    Load Balancing:
                    Consistent hashing also provides efficient load balancing in distributed systems. By distributing data across the ring, the workload is evenly distributed among the available nodes. This ensures that no single node becomes a hotspot or bottleneck for a particular set of data, improving overall system performance and scalability.
                </li>
                <li>
                    Fault Tolerance:
                    Another crucial aspect of consistent hashing is its inherent fault tolerance. If a node fails or becomes unavailable, only a portion of the data stored on that node needs to be redirected to a new node. Since the majority of the data remains unaffected, the impact on the system is significantly reduced, ensuring high availability and resilience.
                </li>
                <li>
                    Applications of Consistent Hashing:
                    Consistent hashing finds applications in various areas, including content distribution networks (CDNs), distributed databases, caching systems, and peer-to-peer networks. In CDNs, it allows for efficient caching and delivery of content by distributing it across multiple edge servers. In distributed databases, consistent hashing enables data partitioning and replication strategies, ensuring data is evenly spread across nodes. Caching systems benefit from consistent hashing by efficiently mapping cached items to cache nodes, reducing cache misses and improving performance.
                </li>
            </ul>
        </Typography>
);


export default function ConsistentHashing() {
    const [learnMore, setLearnMore] = React.useState(false);
    return (
        <Card style={{ margin: '20px auto', padding:'10px 0', width: '80%' }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                
            </Typography>
            <Typography variant="h5" component="div">
                Consistent Hashing: Efficient Data Distribution for Scalable Systems
                
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Introduction: In today's digital age, where data is growing exponentially and systems are required to handle massive amounts of information, efficient data distribution becomes crucial. Consistent hashing is a powerful technique that addresses this challenge by providing an elegant solution for distributing data across a network of servers. This article explores the concept of consistent hashing, its benefits, and its applications in building scalable systems.
                <br />
                Understanding Consistent Hashing:
                Consistent hashing is a distributed hashing scheme that allows for efficient data distribution while minimizing the amount of data movement when nodes are added or removed from a system. Unlike traditional hash functions that evenly distribute data across a fixed number of buckets, consistent hashing maps both data and nodes onto a ring-like structure.
            </Typography>
            {learnMore && Body}
        </CardContent>
        <CardActions>
            <Button onClick={() => {setLearnMore(!learnMore)}} size="small">
                {!learnMore && 'Learn More'}
                {learnMore && 'Hide'}
            </Button>
        </CardActions>
        </Card>
    );
}