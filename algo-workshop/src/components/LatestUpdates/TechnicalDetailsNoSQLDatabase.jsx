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
            1. Data Model Flexibility:
            NoSQL databases offer flexible data models that can adapt to various data structures and formats. The key-value model stores data as simple key-value pairs, where each value is associated with a unique key. Document databases store data in the form of self-describing documents, typically using formats like JSON or XML. Wide-column stores organize data into rows and columns similar to relational databases, but with more flexible schemas. Graph databases model data as nodes, edges, and properties, representing complex relationships between entities.
        </li>
        <li>
            2. Horizontal Scalability:
            NoSQL databases are designed to scale horizontally, allowing the distribution of data across multiple machines or nodes. They employ sharding techniques to partition data and distribute it evenly across a cluster of nodes. This approach enables databases to handle large amounts of data and handle high read and write workloads by leveraging the collective resources of the cluster.
        </li>
        <li>
            3. CAP Theorem:
            The CAP (Consistency, Availability, Partition tolerance) theorem is a fundamental principle in distributed systems, including NoSQL databases. According to the CAP theorem, it is impossible for a distributed system to simultaneously guarantee consistency, availability, and partition tolerance. NoSQL databases typically prioritize either availability and partition tolerance (AP) or consistency and partition tolerance (CP). AP-oriented databases prioritize high availability and can tolerate network partitions but may sacrifice strict consistency. CP-oriented databases prioritize consistency and partition tolerance, making them suitable for scenarios that require strong data consistency.
        </li>
        <li>                
            4. Eventual Consistency:
            Many NoSQL databases employ the concept of eventual consistency, which guarantees that, given enough time and absence of further updates, all replicas of data will eventually converge to a consistent state. Eventual consistency allows for high availability, scalability, and performance, but it may result in temporary inconsistencies during concurrent updates or network partitions. Applications utilizing NoSQL databases often employ conflict resolution techniques and application-level logic to handle eventual consistency.
        </li>
        <li>
            5. Distributed Query Processing:
            NoSQL databases often provide distributed query processing capabilities. Distributed query engines optimize and parallelize query execution across multiple nodes, improving query performance and scalability. These engines distribute query execution plans and intermediate results across nodes, minimizing data movement and network overhead.
        </li>
        <li>
            6. Data Replication and Availability:
            NoSQL databases employ various replication techniques to ensure data availability and fault tolerance. Replication can be synchronous or asynchronous, and it involves replicating data across multiple nodes or data centers. Replication strategies include master-slave replication, multi-master replication, or quorum-based replication. Replication allows for data redundancy, failover capabilities, and improved read performance through load balancing.
        </li>
        <li>
            7. Indexing and Secondary Indexes:
            NoSQL databases provide indexing mechanisms to improve data retrieval performance. They support primary indexes, which are based on the primary key, and secondary indexes, which enable efficient querying based on other attributes or fields. Indexing strategies vary depending on the database type, with options such as B-trees, hash indexes, or specialized indexing structures designed for specific data models.
        </li>
        <li>
            8. Tunable Consistency:
            Some NoSQL databases provide tunable consistency levels, allowing developers to configure the desired trade-off between consistency and performance. These databases enable developers to choose different consistency models, such as strong consistency, eventual consistency, or various levels in between, based on specific application requirements.
        </li>
        <li>
            9. Distributed Transactions:
            While NoSQL databases often prioritize scalability and availability over strict ACID transactions, some provide support for distributed transactions. Distributed transactions enable atomicity, consistency, isolation, and durability guarantees across multiple nodes. Implementations vary among databases, with approaches such as two-phase commit (2PC) or optimistic concurrency control (OCC).
        </li>
        <li>
            10. Polyglot Persistence:
            NoSQL databases embrace the concept of polyglot persistence, allowing different data models to coexist within a single system. Applications can store data using the most appropriate data model for the specific use case. This flexibility enables developers to select the most suitable NoSQL database for each specific requirement within an application, optimizing performance and scalability.

            These technical details provide a glimpse into the inner workings and characteristics of NoSQL databases. It's important to note that specific NoSQL databases may have unique features, capabilities, and trade-offs, so it's crucial to explore documentation and resources specific to the chosen NoSQL database technology when implementing a NoSQL database solution.
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
                NoSQL database design:
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
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