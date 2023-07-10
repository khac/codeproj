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
                Data Replication with Gossip Protocols:
                One of the key applications of gossip protocols in database systems is data replication. Rather than relying on a centralized coordination mechanism, gossip protocols distribute and replicate data across multiple nodes in a decentralized manner. Each node maintains a partial replica of the database, and through gossip-based communication, updates are disseminated throughout the system, ensuring data consistency and availability.
            </li>
            <li>
                Probabilistic Dissemination:
                Gossip protocols operate on the principle of probabilistic dissemination, where nodes randomly select a few peers to exchange information with during each communication round. This randomness helps prevent the formation of bottlenecks and ensures that updates spread quickly throughout the network. Over time, as nodes continue to communicate, the replication of data converges, providing a consistent view of the database across the distributed system.
            </li>
            <li>
                Epidemic Gossip Protocol:
                One popular variant of gossip protocols is the Epidemic Gossip Protocol. In this approach, nodes exchange information with randomly selected peers. When a node receives an update, it propagates the update to a subset of its peers, allowing the update to gradually reach all nodes in the system. The process continues until convergence is achieved, resulting in consistent replicas across the distributed database.
            </li>
            <li>
                Scalability and Fault Tolerance:
                Gossip protocols exhibit excellent scalability characteristics, making them suitable for large-scale distributed systems. As the number of nodes increases, the overall communication cost remains low since each node only needs to communicate with a small subset of its peers during each gossip round. This decentralized nature also contributes to fault tolerance, as the failure of individual nodes has minimal impact on the overall system.
            </li>
            <li>
                Eventual Consistency:
                Gossip protocols often employ an eventual consistency model, where updates propagate asynchronously, and the replicas may temporarily diverge. However, as the gossip process continues, the system converges to a consistent state. Eventual consistency allows for high availability and scalability while still providing a satisfactory level of data correctness for many applications.
            </li>
            <li>
                Applications of Gossip Protocols in Databases:
                Gossip protocols have found extensive applications in various distributed database systems, such as NoSQL databases, peer-to-peer databases, and distributed key-value stores. They enable efficient data replication, fault tolerance, and load balancing. Gossip protocols also excel in scenarios with dynamic membership, where nodes can join or leave the system without centralized coordination.
            </li>
            <li>
                Conclusion:
                Gossip protocols offer an elegant solution for data replication in distributed database systems. By leveraging decentralized and probabilistic communication, these protocols enable efficient and reliable dissemination of updates across a large network of nodes. With their scalability, fault tolerance, and eventual consistency characteristics, gossip protocols have become a valuable tool for building robust and scalable database systems capable of handling the demands of modern distributed computing environments.
            </li>
        </ul>
    </Typography>
);

export default function BasicCard() {
    const [learnMore, setLearnMore] = React.useState(false);
    return (
        <Card style={{ margin: '20px auto', padding:'10px 0', width: '80%' }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            </Typography>
            <Typography variant="h5" component="div">
                Gossip Protocols in Database Systems: Reliable Data Replication at Scale
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Introduction:
                In distributed database systems, ensuring data consistency and availability across multiple nodes is a fundamental challenge. Gossip protocols have emerged as a powerful technique to address these concerns by enabling efficient and reliable data replication in large-scale distributed environments. This article explores the concept of gossip protocols, their benefits, and their applications in building robust and scalable database systems.
                <br />
                Understanding Gossip Protocols:
                Gossip protocols are decentralized and probabilistic communication algorithms designed for disseminating information among a network of nodes in a distributed system. Inspired by the spread of information through gossip in social networks, these protocols enable nodes to exchange data and state updates asynchronously, creating a dynamic and self-organizing network.
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